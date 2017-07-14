import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const monsters = [
      { id: 0, name: 'Zero' },
      { id: 1, name: 'The Nameless One' },
      { id: 11, name: 'Devil' },
      { id: 12, name: 'Scamp' },
      { id: 13, name: 'Bealz' },
      { id: 14, name: 'Imp' },
      { id: 15, name: 'Demon' },
      { id: 16, name: 'Donald' },
      { id: 17, name: 'Black One' },
      { id: 18, name: 'Mr. Black' },
      { id: 19, name: 'Dr. Satan' },
      { id: 20, name: 'Him' }
    ];
    return { monsters };
  }
}
