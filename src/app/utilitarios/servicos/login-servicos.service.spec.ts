import { TestBed } from '@angular/core/testing';

import { LoginServicosService } from './login-servicos.service';

describe('LoginServicosService', () => {
  let service: LoginServicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
