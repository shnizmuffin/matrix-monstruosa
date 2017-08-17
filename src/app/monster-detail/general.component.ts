import { Component, Input } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./monster-detail.component.scss','./general.component.scss']
})
export class GeneralComponent {

  @Input() monster: Monster;
  constructor() { }

}
