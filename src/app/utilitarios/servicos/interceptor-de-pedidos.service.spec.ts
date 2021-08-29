import { TestBed } from '@angular/core/testing';

import { InterceptorDePedidosService } from './interceptor-de-pedidos.service';

describe('InterceptorDePedidosService', () => {
  let service: InterceptorDePedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorDePedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
