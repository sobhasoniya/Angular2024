import { TestBed } from '@angular/core/testing';

import { MapleService } from './maple.service';

describe('MapleService', () => {
  let service: MapleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
