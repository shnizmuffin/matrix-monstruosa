import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Monster } from '../monster';

@Injectable()
export class MonsterSearchService {

  private monstersUrl = '/monsters/search/';

  constructor( private http: Http ) {}

  search( term: string ): Observable < Monster[] > {
    return this.http
      .get( `${this.monstersUrl}${term}` )
      .map( response => response.json() as Monster[] );
  }

}
