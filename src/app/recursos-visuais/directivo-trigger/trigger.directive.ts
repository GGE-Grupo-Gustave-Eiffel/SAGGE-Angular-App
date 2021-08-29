import { Directive, HostBinding} from '@angular/core';
import { HostListener } from '@angular/core';
import { MensageiroService } from '../../utilitarios/servicos/mensageiro.service';

@Directive({
  selector: '[appTrigger]'
})
export class TriggerDirective {

  @HostBinding('class.gn-selected') onClick! : boolean;

  @HostListener('mouseover') onHover() {
   this.mensageiro_service.setar_abrir_menu_icones(true);
  } 

  @HostListener('mouseleave') onMouseLeave() {
    this.mensageiro_service.setar_abrir_menu_icones(false);
  }

  @HostListener('click') onClickFn() {
    if (this.onClick == true) {
      this.onClick = false;
      this.mensageiro_service.setar_abrir_menu_principal(false);
    } else {
       this.onClick = true;
       this.mensageiro_service.setar_abrir_menu_principal(true);
    }   
  }

  constructor(private mensageiro_service : MensageiroService) { }
}
