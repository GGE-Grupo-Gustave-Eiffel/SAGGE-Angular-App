import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoAlunoComponent } from './card-do-aluno.component';

describe('CardDoAlunoComponent', () => {
  let component: CardDoAlunoComponent;
  let fixture: ComponentFixture<CardDoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDoAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
