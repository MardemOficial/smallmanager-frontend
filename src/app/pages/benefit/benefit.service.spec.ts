import { TestBed } from '@angular/core/testing';

import { BenefitService } from './benefit.service';

describe('BenefitService', () => {
  let service: BenefitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
