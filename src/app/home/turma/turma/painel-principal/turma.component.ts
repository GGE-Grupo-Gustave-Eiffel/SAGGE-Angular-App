import { Component, OnInit } from '@angular/core';
import { links_tipos } from '../../../../utilitarios/tipos';
import { url_para_nome } from '../../../../utilitarios/recursos';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponentChild implements OnInit {

  turma_title : string = '';

  links : Array<links_tipos> = [
    {
      nome : 'Minipautas',
      link_caminho : 'minipautas'
    },
    {
      nome : 'Aulas',
      link_caminho : 'aulas'
    },
    {
      nome : 'Termos',
      link_caminho : 'termos'
    },
    {
      nome : 'Relatórios',
      link_caminho : 'relatorios'
    },
    {
      nome : 'Alunos',
      link_caminho : 'alunos'
    },
    {
      nome : 'Professores',
      link_caminho : 'professores'
    },
    {
      nome : 'Horário',
      link_caminho : 'horarios'
    }

  ];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.turma_title = url_para_nome(params['codigo_da_turma']);
    });
  }

}
