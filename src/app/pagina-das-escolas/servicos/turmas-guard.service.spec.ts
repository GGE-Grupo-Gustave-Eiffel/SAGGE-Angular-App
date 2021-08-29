import { TestBed } from '@angular/core/testing';

import { TurmasGuardService } from './turmas-guard.service';

describe('TurmasGuardService', () => {
  let service: TurmasGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmasGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
