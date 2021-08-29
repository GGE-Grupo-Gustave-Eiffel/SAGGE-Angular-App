import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDoAlunoComponent } from './ficha-do-aluno.component';

describe('FichaDoAlunoComponent', () => {
  let component: FichaDoAlunoComponent;
  let fixture: ComponentFixture<FichaDoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaDoAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaDoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
