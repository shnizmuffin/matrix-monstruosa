import { Component } from '@angular/core';
import { Monster } from './monster';

const MONSTERS: Monster[] = [
  { id: 11, name: 'Devil' },
  { id: 12, name: 'Scamp' },
  { id: 13, name: 'Bealz' },
  { id: 14, name: 'Imp' },
  { id: 15, name: 'Demon' },
  { id: 16, name: 'Donald' },
  { id: 17, name: 'Black One' },
  { id: 18, name: 'Mr. Black' },
  { id: 19, name: 'Dr. Satan' },
  { id: 20, name: 'Him' }
];

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )

export class AppComponent {
  title = 'Matrix Monstruosa';
  monsters = MONSTERS;
  selectedMonster: Monster;

  onSelect(monster: Monster): void {
    this.selectedMonster = monster;
  }
}
