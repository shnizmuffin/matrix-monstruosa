import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

  constructor( private http: Http ) {}

  getAll() {
    return this.http
      .get( '/users' )
      .toPromise()
      .then( response => response.json() as User[] )
      .catch( this.handleError );
  }

  getById( _id: string ) {
    return this.http
      .get( '/users/' + _id )
      .map( ( response: Response ) => response.json() );
  }

  create( user: User ) {
    return this.http.post( '/users/register', user );
  }

  update( user: User ) {
    return this.http.put( '/users/' + user._id, user );
  }

  delete( _id: string ) {
    return this.http.delete( '/users/' + _id );
  }

  private handleError( error: any ): Promise < any > {
    console.error( 'An error occurred in user.service.ts', error ); // Needs work
    return Promise.reject( error.message || error );
  }

}
