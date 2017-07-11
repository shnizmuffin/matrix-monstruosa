import { Injectable } from '@angular/core';

import { Monster } from './monster';
import { MONSTERS } from './mock-monsters';

@Injectable()

export class MonsterService {
  getMonsters(): Promise < Monster[] > {
    return Promise.resolve( MONSTERS );
  }

  getMonster( id: number ): Promise < Monster > {
    return this.getMonsters()
      .then( monsters => monsters.find( monster => monster.id === id ) );
  }
}
