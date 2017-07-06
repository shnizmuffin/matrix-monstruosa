import { Component, Input } from '@angular/core';
import { Monster } from './monster';

@Component( {
  selector: 'monster-detail',
  templateUrl: './monster-detail.component.html',
} )

export class MonsterDetailComponent {
  @Input () monster: Monster;
}
