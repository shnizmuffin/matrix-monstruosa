import { Component, Input } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-special-abilities',
  templateUrl: './special-abilities.component.html',
  styleUrls: ['./monster-detail.component.scss','./special-abilities.component.scss']
})
export class SpecialAbilitiesComponent {

  @Input() monster: Monster;
  constructor() { }

}
