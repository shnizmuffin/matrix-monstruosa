import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Monster } from './monster';

@Injectable()

export class MonsterService {

  private monstersUrl = '/monsters';
  private headers = new Headers( { 'Content-Type': 'application/json' } );

  constructor( private http: Http ) {}

  getMonsters(): Promise < Monster[] > {

    return this.http
      .get( this.monstersUrl )
      .toPromise()
      .then( response => response.json() as Monster[] )
      .catch( this.handleError );
  }

  getMonster( _id: string ): Promise < Monster > {

    const url = `${this.monstersUrl}/${_id}`;

    return this.http
      .get( url )
      .toPromise()
      .then( response => response.json() as Monster )
      .catch( this.handleError );
  }

  updateMonster( monster: Monster ): Promise < Monster > {

    const url = `${this.monstersUrl}/${monster._id}`;

    return this.http
      .put( url, JSON.stringify( monster ), { headers: this.headers } )
      .toPromise()
      .then( () => monster )
      .catch( this.handleError );
  }

  createMonster( name: string ): Promise < Monster > {
    return this.http
      .post( this.monstersUrl, JSON.stringify( { name: name } ), { headers: this.headers } )
      .toPromise()
      .then( res => res.json() as Monster )
      .catch( this.handleError );
  }

  deleteMonster( _id: string ): Promise < void > {

    const url = `${this.monstersUrl}/${_id}`;

    return this.http.delete( url, { headers: this.headers } )
      .toPromise()
      .then( () => null )
      .catch( this.handleError );
  }

  private handleError( error: any ): Promise < any > {
    console.error( 'An error occurred in monster.service.ts', error ); // Needs work
    return Promise.reject( error.message || error );
  }
}
