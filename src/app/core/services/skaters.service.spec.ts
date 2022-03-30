import { TestBed } from '@angular/core/testing';

import { SkatersService } from './skaters.service';

describe('SkatersService', () => {
  let service: SkatersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkatersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
