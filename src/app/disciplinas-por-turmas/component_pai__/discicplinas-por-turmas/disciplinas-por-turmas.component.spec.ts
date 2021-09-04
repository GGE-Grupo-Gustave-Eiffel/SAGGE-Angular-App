import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasPorTurmasComponent } from './disciplinas-por-turmas.component';

describe('DisciplinasPorTurmasComponent', () => {
  let component: DisciplinasPorTurmasComponent;
  let fixture: ComponentFixture<DisciplinasPorTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinasPorTurmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasPorTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
