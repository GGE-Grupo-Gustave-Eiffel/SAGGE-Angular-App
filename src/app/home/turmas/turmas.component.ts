import { Component, OnInit } from '@angular/core';
import { turma_tipo } from '../../utilitarios/tipos'
import { ServicosDeDadosService } from '../servico-de-dados/servicos-de-dados.service';
import { conversor_url } from '../../utilitarios/recursos';
import { LoginServicosService } from 'src/app/utilitarios/servicos/login-servicos.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas : Array<turma_tipo> = [];
  msg_de_info = 'Clique para ver aulas';

  constructor(
    private servicos_dados : ServicosDeDadosService,
    private loginService : LoginServicosService
  
  ) { }

  ngOnInit() {

    this.loginService.profileUser().pipe(
      switchMap(professor => {
        return  this.servicos_dados.get_turmas(professor.id)
      })
    ).subscribe(data => {
      this.turmas = data.turmas;
    });
    
  }

  converte_para_url(texto : string) : string {
    return conversor_url(texto);
  }

}
