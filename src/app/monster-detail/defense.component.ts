import { Component, Input } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./monster-detail.component.scss','./defense.component.scss']
})
export class DefenseComponent {

  @Input() monster: Monster;
  constructor() { }

}
