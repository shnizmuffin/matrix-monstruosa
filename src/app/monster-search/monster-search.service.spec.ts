import { TestBed, inject } from '@angular/core/testing';

import { MonsterSearchService } from './monster-search.service';

describe('MonsterSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonsterSearchService]
    });
  });

  it('should be created', inject([MonsterSearchService], (service: MonsterSearchService) => {
    expect(service).toBeTruthy();
  }));
});
