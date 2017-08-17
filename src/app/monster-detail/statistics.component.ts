import { Component, Input } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./monster-detail.component.scss','./statistics.component.scss']
})
export class StatisticsComponent {

  @Input() monster: Monster;
  constructor() { }

}
