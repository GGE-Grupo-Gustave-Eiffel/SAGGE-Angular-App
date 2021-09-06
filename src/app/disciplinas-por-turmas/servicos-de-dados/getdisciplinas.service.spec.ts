import { TestBed } from '@angular/core/testing';

import { GetdisciplinasService } from './getdisciplinas.service';

describe('GetdisciplinasService', () => {
  let service: GetdisciplinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdisciplinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
