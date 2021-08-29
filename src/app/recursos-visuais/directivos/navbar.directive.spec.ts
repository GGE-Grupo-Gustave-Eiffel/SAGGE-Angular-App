import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NavbarDirective } from './navbar.directive';
import { NavbarFalsoComponent } from '../recursos-para-testes/falso-navbar-component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarDirective', () => {

  let navbar_component : NavbarFalsoComponent;
  let subnav_directive : NavbarDirective;
  let fixture : ComponentFixture<NavbarFalsoComponent>;
  let botao_menu_icones : DebugElement;
  let menu_icones : DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [NavbarDirective, NavbarFalsoComponent]
    });
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(NavbarFalsoComponent);
    navbar_component = fixture.componentInstance;
    botao_menu_icones = fixture.debugElement.query(By.css('.gn-icon-menu'));
    menu_icones = fixture.debugElement.query(By.css('.gn-menu-wrapper'));
    fixture.detectChanges();

  });

  it('deve abrir o menu de ícones assim que o mouse faz um hover sobre o menu', () => {
    /*
    botao_menu_icones.triggerEventHandler('click', null);
    
    expect(menu_icones.nativeElement.classList.item(1)).toEqual('gn-open-part');
    */
  });

  
});
