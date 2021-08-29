import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NavbarDirective } from '../directivos/navbar.directive';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
 
  
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let navbar_directivo : NavbarDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('deve criar o componente navbar', () => {
    expect(component).toBeTruthy();
  });
  
});
