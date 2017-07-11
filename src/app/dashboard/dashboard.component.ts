import { Component, OnInit } from '@angular/core';

import { Monster } from '../monster';
import { MonsterService } from '../monster.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
} )
export class DashboardComponent implements OnInit {

  monsters: Monster[];

  constructor( private monsterService: MonsterService ) {}

  ngOnInit(): void {
    this.monsterService.getMonsters()
      .then( monsters => this.monsters = monsters.slice( 1, 5 ) );
  }

}
