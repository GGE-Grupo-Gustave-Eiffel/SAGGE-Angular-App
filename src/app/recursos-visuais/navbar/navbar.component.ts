import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() onIconMenuOpen1 : EventEmitter<null> = new EventEmitter();
  @Output() onIconMenuClosed1 : EventEmitter<null> = new EventEmitter();

  @Output() onFullMenuOpen1 : EventEmitter<null> = new EventEmitter();
  @Output() onFullMenuClosed1 : EventEmitter<null> = new EventEmitter();

  constructor() { }

  emit_on_icon_menu_open() {
    this.onIconMenuOpen1.emit();
  }

  emit_on_icon_menu_closed() {
    this.onIconMenuClosed1.emit();
  }

  emit_on_full_menu_open() {
    this.onFullMenuOpen1.emit();
  }

  emit_on_full_menu_closed() {
    this.onFullMenuClosed1.emit();
  }

}
