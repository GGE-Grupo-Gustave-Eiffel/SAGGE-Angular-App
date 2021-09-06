import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetdisciplinasService } from '../../servicos-de-dados/getdisciplinas.service';

@Component({
  selector: 'app-disciplinas-por-turmas',
  templateUrl: './disciplinas-por-turmas.component.html',
  styleUrls: ['./disciplinas-por-turmas.component.css']
})
export class DisciplinasPorTurmasComponent implements OnInit {

  disciplinas : Array<any> = [];

  constructor(
    private info_da_rota : ActivatedRoute,
    private servicosDeDados : GetdisciplinasService  
  ) { }

  ngOnInit(): void {

    this.info_da_rota.params.pipe(
      switchMap((params : Params) => {
        return this.servicosDeDados.get_disciplinas(params['nome_da_turma'])
      })
    ).subscribe(data => {
      this.disciplinas = data.disciplinas;
    });
  }

}
