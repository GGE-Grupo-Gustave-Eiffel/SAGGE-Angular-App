import { Component } from '@angular/core';
import { links_tipos } from '../../utilitarios/tipos';

@Component({
  selector: 'app-ficha-do-aluno',
  templateUrl: './ficha-do-aluno.component.html',
  styleUrls: ['./ficha-do-aluno.component.css']
})
export class FichaDoAlunoComponent  {

  links : Array<links_tipos> = [
    {
      nome : 'Relatório',
      link_caminho : '/relatorio'
    },
    {
      nome : 'Ocorrências',
      link_caminho: '/ocorrencias'
    },
    {
      nome : 'Avaliações',
      link_caminho : '/avaliacoes'
    },
    {
      nome : 'Termo de Notas',
      link_caminho : '/termo'
    }
  ]

  constructor() { }

  

}
