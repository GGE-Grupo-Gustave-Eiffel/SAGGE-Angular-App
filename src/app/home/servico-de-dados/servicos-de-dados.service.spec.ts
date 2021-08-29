import { TestBed } from '@angular/core/testing';

import { ServicosDeDadosService } from './servicos-de-dados.service';

describe('ServicosDeDadosService', () => {
  let service: ServicosDeDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosDeDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
