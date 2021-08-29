import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUsuarioNaoAutenticadoComponent } from './pagina-usuario-nao-autenticado.component';

describe('PaginaUsuarioNaoAutenticadoComponent', () => {
  let component: PaginaUsuarioNaoAutenticadoComponent;
  let fixture: ComponentFixture<PaginaUsuarioNaoAutenticadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaUsuarioNaoAutenticadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaUsuarioNaoAutenticadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
