var config = require('config.json');
var express = require('express');
var router = express.Router();
var monsterService = require('services/monster.service');

// routes
router.post('/', create);
router.get('/', getMonsters);
router.get('/:_id', getMonsterById);
router.get('/search/:_name', getMonsterBySearch);
router.put('/:_id', update);
router.delete('/:_id', _delete);

module.exports = router;

function create(req, res) {
    monsterService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getMonsters(req, res) {
    monsterService.getMonsters()
        .then(function (monsters) {
            res.send(monsters);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getMonsterById(req, res) {
    monsterService.getMonsterById(req.params._id)
        .then(function (monster) {
            if (monster) {
                res.send(monster);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getMonsterBySearch(req, res) {
    monsterService.getMonsterBySearch(req.params._name)
        .then(function (monster) {
            if (monster) {
                res.send(monster);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    monsterService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    monsterService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}