import { TestBed } from '@angular/core/testing';

import { LBillService } from './l-bill.service';

describe('LBillService', () => {
  let service: LBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
