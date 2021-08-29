import { Component, Input, OnInit } from '@angular/core';
import { minipauta_tipo } from '../../utilitarios/tipos';
import { minipautas } from '../../utilitarios/dados_falso';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  @Input() dados_minipata! : Array<minipauta_tipo>

  constructor() { }

  ngOnInit(): void {
    this.dados_minipata = minipautas;
  }

}
