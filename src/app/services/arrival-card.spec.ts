import { TestBed } from '@angular/core/testing';

import { ArrivalCard } from './arrival-card';

describe('ArrivalCard', () => {
  let service: ArrivalCard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrivalCard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
