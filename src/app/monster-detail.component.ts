import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Monster } from './monster';
import { MonsterService } from './monster.service';

@Component( {
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
} )

export class MonsterDetailComponent implements OnInit {

  @Input() monster: Monster;

  constructor(
    private monsterService: MonsterService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.monsterService.getMonster(+params.get('id')))
      .subscribe(monster => this.monster = monster);
  }

  goBack(): void {
    this.location.back();
  }

}
