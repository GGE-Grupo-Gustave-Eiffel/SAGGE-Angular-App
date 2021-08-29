import { Component, OnInit } from '@angular/core';
import { sumarios_dados } from '../../utilitarios/dados_falso';
import { sumarios_tipo } from '../../utilitarios/tipos';

@Component({
  selector: 'app-minipauta',
  templateUrl: './minipauta.component.html',
  styleUrls: ['./minipauta.component.css']
})
export class MinipautaComponent implements OnInit {

  alunos : Array<sumarios_tipo> = sumarios_dados;
  tool_tip  : string = 'Trimestre ';
  

  constructor() { }

  ngOnInit(): void {
  }

}
