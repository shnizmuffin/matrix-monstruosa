import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

import { Monster } from './monster';
import { MonsterService } from './monster.service';
import { DashboardService } from './dashboard/dashboard.service';

@Component( {
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: [ './monster-detail.component.scss' ]
} )

export class MonsterDetailComponent {

  @Input() monster: Monster;
  subscription: Subscription;

  constructor(
    private monsterService: MonsterService,
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.subscription = dashboardService.selectedMonster$.subscribe(
      monster => this.monster = monster
    )
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.monsterService.updateMonster( this.monster )
      .then( () => this.goBack() );
  }

}
