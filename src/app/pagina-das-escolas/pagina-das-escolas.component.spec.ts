import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDasEscolasComponent } from './pagina-das-escolas.component';

describe('PaginaDasEscolasComponent', () => {
  let component: PaginaDasEscolasComponent;
  let fixture: ComponentFixture<PaginaDasEscolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDasEscolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDasEscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
