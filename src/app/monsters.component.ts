import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Monster } from './monster';
import { MonsterService } from './monster.service';

@Component( {
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: [ './monsters.component.scss' ]
} )

export class MonstersComponent implements OnInit {
  monsters: Monster[];
  selectedMonster: Monster;

  constructor(
    private router: Router,
    private monsterService: MonsterService
  ) {}

  getMonsters(): void {
    this.monsterService.getMonsters()
      .then( monsters => this.monsters = monsters );
  };

  ngOnInit(): void {
    this.getMonsters();
  };

  onSelect( monster: Monster ): void {
    this.selectedMonster = monster;
  };

  gotoDetail(): void {
    this.router.navigate( [ '/detail', this.selectedMonster._id ] );
  };

  add( name: string ): void {
    name = name.trim();
    if ( !name ) {
      return;
    }
    this.monsterService.createMonster( name )
      .then( monster => {
        this.monsters.push( monster );
        this.selectedMonster = null;
      } );
  };

  delete( monster: Monster ): void {
    this.monsterService
      .deleteMonster( monster._id )
      .then( () => {
        this.monsters = this.monsters.filter( m => m !== monster );
        if ( this.selectedMonster === monster ) {
          this.selectedMonster = null;
        };
      } )
  };
}
