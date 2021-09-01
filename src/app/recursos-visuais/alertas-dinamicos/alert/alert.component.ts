import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-dinamico',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input()
  nome_do_esdante! : string;

  @Input()
  tipo_de_falta! : string;

  @Input()
  id_da_falta! : number;
  
  @Output()
  ao_apagar_esta_falta : EventEmitter<any> = new EventEmitter();

  constructor() { }

  apaga_esta_falta() {
    this.ao_apagar_esta_falta.emit({
      id : this.id_da_falta
    });
  }
 
  setar_classe() {
    if (this.tipo_de_falta == 'Ausência') {
      return "alert-info";
    } else if (this.tipo_de_falta == 'Material') {
      return "alert-black";
    }
    return "alert-danger";
  }

}
