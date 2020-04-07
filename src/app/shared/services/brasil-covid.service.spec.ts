import { TestBed } from '@angular/core/testing';

import { BrasilCovidService } from './brasil-covid.service';

describe('BrasilCovidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrasilCovidService = TestBed.get(BrasilCovidService);
    expect(service).toBeTruthy();
  });
});
