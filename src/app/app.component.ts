import { Component, OnInit } from '@angular/core';

import { Monster } from './monster';
import { MonsterService } from './monster.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ MonsterService ]
} )

export class AppComponent implements OnInit {
  title = 'Matrix Monstruosa';
  monsters: Monster[];
  selectedMonster: Monster;

  constructor( private monsterService: MonsterService ) {}

  getMonsters(): void {
    this.monsterService.getMonsters().then(monsters => this.monsters = monsters);
  }

  ngOnInit(): void {
    this.getMonsters();
  }

  onSelect( monster: Monster ): void {
    this.selectedMonster = monster;
  }
}
