import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Monster } from '../monster';

@Injectable()
export class MonsterSearchService {

  constructor( private http: Http ) {}

  search( term: string ): Observable < Monster[] > {
    return this.http
      .get( `api/monsters/?name=${term}` )
      .map( response => response.json().data as Monster[] );
  }

}
