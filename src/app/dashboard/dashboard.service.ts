import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Monster } from '../monster';

@Injectable()
export class DashboardService {

  private selectedMonster = new Subject <Monster>();

  selectedMonster$ = this.selectedMonster.asObservable();

  selectMonster(monster: Monster) {
    this.selectedMonster.next(monster);
    console.log('new monster selected: ', monster);
  }

}
