import { TestBed } from '@angular/core/testing';

import { LoginblockService } from './loginblock.service';

describe('LoginblockService', () => {
  let service: LoginblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
