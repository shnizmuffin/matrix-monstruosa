import { Component, Input } from '@angular/core';
import { Monster } from '../monster';

@Component({
  selector: 'app-ecology',
  templateUrl: './ecology.component.html',
  styleUrls: ['./monster-detail.component.scss','./ecology.component.scss']
})
export class EcologyComponent {

  @Input() monster: Monster;
  constructor() { }

}
