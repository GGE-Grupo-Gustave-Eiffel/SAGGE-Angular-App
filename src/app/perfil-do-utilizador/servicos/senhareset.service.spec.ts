import { TestBed } from '@angular/core/testing';

import { SenharesetService } from './senhareset.service';

describe('SenharesetService', () => {
  let service: SenharesetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenharesetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
