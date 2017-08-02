import { Component, Input } from '@angular/core';

import { Monster } from '../monster';
import { MonsterService } from '../monster.service';
import { DashboardService } from './dashboard.service';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
} )
export class DashboardComponent {

  @Input() monster: Monster;

  constructor(
    private monsterService: MonsterService,
    private dashboardService: DashboardService
  ) {

    dashboardService.selectedMonster$.subscribe(
      monster => this.monster
    )
  }

}
