var config = require( 'config.json' );
var _ = require( 'lodash' );
var jwt = require( 'jsonwebtoken' );
var bcrypt = require( 'bcryptjs' );
var Q = require( 'q' );
var mongo = require( 'mongoskin' );
var db = mongo.db( config.connectionString, { native_parser: true } );
db.bind( 'monsters' );

var service = {};

service.getMonsters = getMonsters;
service.getMonsterById = getMonsterById;
service.getMonsterBySearch = getMonsterBySearch;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function getMonsters() {
  var deferred = Q.defer();

  db.monsters.find().toArray( function( err, monsters ) {
    if ( err ) deferred.reject( err.name + ': ' + err.message );

    // return monsters
    monsters = _.map( monsters );

    deferred.resolve( monsters );
  } );

  return deferred.promise;
}

function getMonsterById( _id ) {
  var deferred = Q.defer();

  db.monsters.findById( _id, function( err, monster ) {
    if ( err ) deferred.reject( err.name + ': ' + err.message );

    if ( monster ) {
      // return monster
      deferred.resolve( monster );
    } else {
      // monster not found
      deferred.resolve();
    }
  } );

  return deferred.promise;
}

function getMonsterBySearch( _name ) {
  var deferred = Q.defer();

  db.monsters
    .find( { $text: { $search: _name } }, { score: { $meta: "textScore" } } )
    .sort( { score: { $meta: "textScore" } } )
    .toArray( function( err, monster ) {
      if ( err ) deferred.reject( err.name + ': ' + err.message );

      if ( monster ) {
        // return monster
        deferred.resolve( monster );
      } else {
        // monster not found
        deferred.resolve();
      }
    } );

  return deferred.promise;
}

function create( monsterParam ) {
  var deferred = Q.defer();

  // validation
  db.monsters.findOne( { name: monsterParam.name },
    function( err, monster ) {
      if ( err ) deferred.reject( err.name + ': ' + err.message );

      if ( monster ) {
        // monster already exists
        deferred.reject( 'A monster named "' + monsterParam.name + '" already exists' );
      } else {
        createMonster();
      }
    } );

  function createMonster() {
    // set monster object to monsterParam
    var monster = monsterParam;

    db.monsters.insert(
      monster,
      function( err, doc ) {
        if ( err ) deferred.reject( err.name + ': ' + err.message );

        deferred.resolve();
      } );
  }

  return deferred.promise;
}

function update( _id, monsterParam ) {
  var deferred = Q.defer();

  // validation
  db.monsters.findById( _id, function( err, monster ) {
    if ( err ) deferred.reject( err.name + ': ' + err.message );

    if ( monster.name !== monsterParam.name ) {
      // monster name has changed so check if the new name is already taken
      db.monsters.findOne( { name: monsterParam.name },
        function( err, monster ) {
          if ( err ) deferred.reject( err.name + ': ' + err.message );

          if ( monster ) {
            // monster already exists
            deferred.reject( 'A monster named "' + req.body.name + '" already exists' );
          } else {
            updateMonster();
          }
        } );
    } else {
      updateMonster();
    }
  } );

  function updateMonster() {
    // fields to update
    var set = {
      name: monsterParam.name
    };

    db.monsters.update( { _id: mongo.helper.toObjectID( _id ) }, { $set: set },
      function( err, doc ) {
        if ( err ) deferred.reject( err.name + ': ' + err.message );

        deferred.resolve();
      } );
  }

  return deferred.promise;
}

function _delete( _id ) {
  var deferred = Q.defer();

  db.monsters.remove( { _id: mongo.helper.toObjectID( _id ) },
    function( err ) {
      if ( err ) deferred.reject( err.name + ': ' + err.message );

      deferred.resolve();
    } );

  return deferred.promise;
}
