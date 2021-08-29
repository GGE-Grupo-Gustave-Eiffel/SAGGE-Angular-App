import { TestBed } from '@angular/core/testing';

import { EstadoDeAutenticacaoService } from './estado-de-autenticacao.service';

describe('EstadoDeAutenticacaoService', () => {
  let service: EstadoDeAutenticacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoDeAutenticacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
