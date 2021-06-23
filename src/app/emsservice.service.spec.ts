import { TestBed } from '@angular/core/testing';

import { EmsserviceService } from './emsservice.service';

describe('EmsserviceService', () => {
  let service: EmsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
