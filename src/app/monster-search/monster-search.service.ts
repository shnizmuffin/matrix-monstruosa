import { environment } from 'environments/environment';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Monster } from '../monster';

const API_URL = environment.apiUrl;

@Injectable()
export class MonsterSearchService {

  private monstersUrl = API_URL + '/monsters';

  constructor( private http: Http ) {}

  search( term: string ): Observable < Monster[] > {
    return this.http
      .get( `${this.monstersUrl}?name_like=${term}` )
      .map( response => response.json() as Monster[] );
  }

}
