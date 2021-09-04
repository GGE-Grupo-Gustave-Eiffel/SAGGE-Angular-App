import { TestBed } from '@angular/core/testing';

import { GravadorDeAulasService } from './gravador-de-aulas.service';

describe('GravadorDeAulasService', () => {
  let service: GravadorDeAulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GravadorDeAulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
