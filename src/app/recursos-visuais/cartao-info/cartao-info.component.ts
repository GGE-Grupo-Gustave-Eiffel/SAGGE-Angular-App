import { Component, Input } from '@angular/core';
import { links_tipos, sumarios_tipo } from '../../utilitarios/tipos';

@Component({
  selector: 'app-cartao-info',
  templateUrl: './cartao-info.component.html',
  styleUrls: ['./cartao-info.component.css']
})
export class CartaoInfoComponent {

  @Input()
  info_da_aula! : sumarios_tipo;

  @Input()
  links : Array<links_tipos> = [];

  constructor() { }

  

}
