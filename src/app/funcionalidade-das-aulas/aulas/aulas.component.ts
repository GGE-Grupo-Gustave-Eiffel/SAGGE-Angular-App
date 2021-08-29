import { Component, OnInit } from '@angular/core';
import { sumarios_dados } from 'src/app/utilitarios/dados_falso';
import { links_tipos, sumarios_tipo } from 'src/app/utilitarios/tipos';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponentDefault implements OnInit {

  sumarios! : Array<sumarios_tipo>;
  semanas : Array<string> = [];
  tool_tip  : string = 'Semana ';

  links : Array<links_tipos> = [
    {
      nome : 'ver aula',
      link_caminho : 'aula'
    },
    {
      nome : 'Editar registos',
      link_caminho : 'editar'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
    sumarios_dados.forEach((aula)=>{
      if (this.semanas.indexOf(aula.detalhes_aula.semana) === -1) {
        this.semanas.push(aula.detalhes_aula.semana);
      }
    });

    // classifica a lista de semanas
    this.semanas.sort();

    this.sumarios = sumarios_dados.filter((aula) => aula.detalhes_aula.semana === this.semanas[0]);
  }

  alteracao_semana(indice : number) {
    this.sumarios = sumarios_dados.filter((aula) => aula.detalhes_aula.semana === this.semanas[indice - 1])
  }

}
