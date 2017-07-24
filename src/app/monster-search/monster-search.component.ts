import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extension
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MonsterSearchService } from './monster-search.service';
import { Monster } from '../monster';


@Component( {
  selector: 'app-monster-search',
  templateUrl: './monster-search.component.html',
  styleUrls: [ './monster-search.component.scss' ],
  providers: [ MonsterSearchService ]
} )
export class MonsterSearchComponent implements OnInit {

  monsters: Observable < Monster[] > ;
  private searchTerms = new Subject < string > ();

  constructor(
    private monsterSearchService: MonsterSearchService,
    private router: Router ) {}

  // Push a search term into the observable stream.
  // A Subject is a producer of an observable event stream;
  // searchTerms produces an Observable of strings, the filter criteria for the name search.
  // Each call to search() puts a new string into this subject's observable stream by calling next().
  search( term: string ): void {
    this.searchTerms.next( term );
  }

  ngOnInit(): void {
    this.monsters = this.searchTerms
      // wait 300ms after each keystroke before searching on the term.
      .debounceTime( 300 )
      // ignore if the search term is the same as the previous one
      .distinctUntilChanged()
      // switch to new observable each time the term changes
      // return the http search observable or the observable of empty heroes if there was no search term
      .switchMap( term => term ? this.monsterSearchService.search( term ) : Observable.of < Monster[] > ( [] ) )
      .catch( error => {
        console.log( error ); // needs work.
        return Observable.of < Monster[] > ( [] );
      } );
  }

  gotoDetail( monster: Monster ): void {
    let link = [ '/detail', monster.id ];
    this.router.navigate( link );
  }

}
