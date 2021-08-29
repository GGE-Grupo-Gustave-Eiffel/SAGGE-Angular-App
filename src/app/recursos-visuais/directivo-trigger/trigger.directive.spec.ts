import { TriggerDirective } from './trigger.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template : `<a class="gn-icon gn-icon-menu"  appTrigger><span>Menu</span></a>`
})
export class StubComponent {}

export class StubService {}

describe('TriggerDirective', () => {

  let component : StubComponent;
  let fixture : ComponentFixture<StubComponent>;
  let ancora_el : DebugElement;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations : [StubComponent, TriggerDirective],
      providers : [StubService]
    });
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
    ancora_el = fixture.debugElement.query(By.css('a'));  
  });

  it('deve adicionar a classe gn-selected quando se clica sobre o menu', () => {
    ancora_el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(ancora_el.nativeElement.classList).toContain('gn-selected');
  });
});
