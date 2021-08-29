import { TestBed } from '@angular/core/testing';

import { SettarEscolaService } from './settar-escola.service';

describe('SettarEscolaService', () => {
  let service: SettarEscolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettarEscolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
