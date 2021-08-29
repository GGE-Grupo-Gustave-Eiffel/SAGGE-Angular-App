import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { numero_para_arrays } from '../../utilitarios/recursos';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input()
  paginas : number = 1;
  paginas_vector : Array<number> = [];

  @Input()
  tool_tip : string = '';

  @Output()
  emitir_mudar_semana : EventEmitter<number> = new EventEmitter();

  ultima_pagina_selecionada: any;
  activar_primeira_pagina : boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.paginas_vector = numero_para_arrays(this.paginas);
  }
  
  mudar_semana_clique(indice : number, paginaEl? : HTMLElement) {

    this.activar_primeira_pagina = false;
    
    if (this.ultima_pagina_selecionada) {
      this.eliminar_focus_na_pagina();
    }

    paginaEl?.classList.add("pagination:active");
    this.ultima_pagina_selecionada = paginaEl;
    this.emitir_mudar_semana.emit(indice);
  }

  classe_primeiro_ele() {
    if (this.activar_primeira_pagina) {
      return "pagination:active"
    } return "";
  }

  eliminar_focus_na_pagina() {
    this.ultima_pagina_selecionada.classList.remove("pagination:active");
  }

  para_num_romanos(numero : number)  {
    switch(numero) {
      case 1:
        return '1';
      case 2:
        return '2';
      case 3 : 
        return '3';
      case 4 :
        return '4';
      case 5 :
        return '5';
      default:
        return '6';
    }
  }

}
