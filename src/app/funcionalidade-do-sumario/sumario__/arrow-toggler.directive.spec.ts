import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrowTogglerDirective } from './arrow-toggler.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template : `<a class="arrow-icon" appArrowToggler></a>`
})
class DummySumarioComponent {}

describe('ArrowTogglerDirective', () => {

  let component : DummySumarioComponent;
  let fixture : ComponentFixture<DummySumarioComponent>;
  let ancora_el : DebugElement;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations : [ArrowTogglerDirective, DummySumarioComponent]
    });
    fixture = TestBed.createComponent(DummySumarioComponent);
    component = fixture.componentInstance;
    ancora_el = fixture.debugElement.query(By.css('a'));     
  });

  it('deve adicionar open na lista de classes da áncora que move a seta(baixo/cima)', () => {
    ancora_el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(ancora_el.nativeElement.classList).toContain('open');
  });
});
