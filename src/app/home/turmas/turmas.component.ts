import { Component, OnInit } from '@angular/core';
import { turma_tipo } from '../../utilitarios/tipos'
import { ServicosDeDadosService } from '../servico-de-dados/servicos-de-dados.service';
import { conversor_url } from '../../utilitarios/recursos';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {

  turmas : Array<turma_tipo> = [];
  msg_de_info = 'Clique para ver aulas';

  constructor(private servicos_dados : ServicosDeDadosService) { }

  ngOnInit() {
    this.get_turmas();
  }

  converte_para_url(texto : string) : string {
    return conversor_url(texto);
  }

  get_turmas() {
   
      this.turmas = [
        {nome : '7ªclasseA'},
        {nome : '7ªclasseB'},
        {nome : '8ªclasseA'},
        {nome : '8ªclasseB'},
        {nome : '9ªclasseA'},
        {nome : '9ªclasseB'},
        {nome : '10ªC.F.B'},
        {nome : '10ªC.E.J'},
        {nome : '11ªC.F.B'},
        {nome : '11ªC.E.J'},
        {nome : '12ªC.F.B'},
        {nome : '13ªCG'}
      ];
  }

}
