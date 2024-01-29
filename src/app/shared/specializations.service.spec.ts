import { TestBed } from '@angular/core/testing';

import { SpecializationService } from './specializations.service';

describe('SpecializationsService', () => {
  let service: SpecializationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecializationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
