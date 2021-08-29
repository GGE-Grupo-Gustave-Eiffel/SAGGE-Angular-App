import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoIndisponivelComponent } from './conteudo-indisponivel.component';

describe('ConteudoIndisponivelComponent', () => {
  let component: ConteudoIndisponivelComponent;
  let fixture: ComponentFixture<ConteudoIndisponivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoIndisponivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoIndisponivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
