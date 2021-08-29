import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensageiroService {
  
  private readonly _abrir_menu_icones = new BehaviorSubject<boolean>(false);
  private readonly _abrir_menu_principal = new BehaviorSubject<boolean>(false);

  readonly abrir_menu_icones$ = this._abrir_menu_icones.asObservable();
  readonly abrir_menu_principal$ = this._abrir_menu_principal.asObservable();

  constructor() {}

  setar_abrir_menu_icones(abrir : boolean) : void {
    this._abrir_menu_icones.next(abrir);
  }

  setar_abrir_menu_principal(abrir : boolean) : void {
    this._abrir_menu_principal.next(abrir);
  }
}
