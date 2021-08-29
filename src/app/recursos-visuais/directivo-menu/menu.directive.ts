import { Directive, HostBinding, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensageiroService } from '../../utilitarios/servicos/mensageiro.service';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective implements OnDestroy {

  @HostBinding('class.gn-open-part') menu_icones! : boolean;
  @HostBinding('class.gn-open-all') menu_principal! : boolean;
  window : Window = window;

  private _subscricao_menu_icone! : Subscription;
  private _subscricao_menu_principal! : Subscription;

  constructor(private mensageiro_service : MensageiroService) {
    this._subscricao_menu_icone = this.mensageiro_service.abrir_menu_icones$.subscribe((abrir) => {
      if (abrir) {
        this.abrir_menu_icone();
      } else {
        this.fechar_menu_icone();
      }
    }); 
    
    this._subscricao_menu_principal = this.mensageiro_service.abrir_menu_principal$.subscribe((abrir) => {
      if (abrir) {
        this.abrir_menu_principal();
      } else {
        this.fechar_menu_principal();
      }
    });
  }

  fechar_menu_icone() {
    this.menu_icones = false;
  }

  abrir_menu_icone() {
    this.menu_icones = true;
  }

  abrir_menu_principal() {
    this.menu_principal = true;
  }

  fechar_menu_principal() {
    this.menu_principal = false;
  }

  ngOnDestroy() {
    this._subscricao_menu_icone.unsubscribe();
    this._subscricao_menu_principal.unsubscribe();
  }
  

}
