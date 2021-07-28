import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() aoAbrirMenuDeIcones : EventEmitter<null> = new EventEmitter();
  @Output() aoFecharMenuDeIcones : EventEmitter<null> = new EventEmitter();

  @Output() aoAbrirMenuPrincipal : EventEmitter<null> = new EventEmitter();
  @Output() aoFecharMenuPrincipal : EventEmitter<null> = new EventEmitter();

  constructor() { }

  emite_menu_de_icones_aberto() {
    this.aoAbrirMenuDeIcones.emit();
  }

  emite__menu_de_icones_fechado() {
    this.aoFecharMenuDeIcones.emit();
  }

  emite_menu_principal_aberto() {
    this.aoAbrirMenuPrincipal.emit();
  }

  emite_menu_principal_fechado() {
    this.aoFecharMenuPrincipal.emit();
  }

}
