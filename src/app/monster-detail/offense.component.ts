import { Component, Input } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-offense',
  templateUrl: './offense.component.html',
  styleUrls: ['./monster-detail.component.scss','./offense.component.scss']
})
export class OffenseComponent {

  @Input() monster: Monster;
  constructor() { }

}
