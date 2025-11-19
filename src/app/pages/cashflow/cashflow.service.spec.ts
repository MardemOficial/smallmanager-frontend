import { TestBed } from '@angular/core/testing';

import { CashflowService } from './cashflow.service';

describe('CashflowService', () => {
  let service: CashflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
