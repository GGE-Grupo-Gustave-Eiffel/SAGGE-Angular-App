import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { sumarios_dados } from 'src/app/utilitarios/dados_falso';
import { links_tipos, sumarios_tipo } from 'src/app/utilitarios/tipos';
import { AulasService } from '../serivo-de-dados/aulas.service';
import { de_url_para_turma } from '../../utilitarios/recursos';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponentDefault implements OnInit {

  aulas : Array<any> = [];
  aulas_detalhes : Array<any> = [];
  dados_das_aulas : any;
  msg_de_espera : string = 'a carregar Informações...';
  vector_de_aulas_vazio! : boolean;

  constructor(
    private route: ActivatedRoute,
    private servicoDeAulas : AulasService
  ) { }
 
  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.servicoDeAulas.getAulas(de_url_para_turma(params['nome_da_turma'])).subscribe(data => {
        this.aulas = data.aulas;
        console.log(data.aulas);
        this.vector_de_aulas_vazio = data.aulas.length == 0 ? true : false;
      });
    });
  }

  getDetalhesDaAula(dados_aula : any) {

    // só consultar o server se os dados não tiverem sido armazenados no vector aulas_detalhes.
    let detalhesJaGravados = this.aulas_detalhes.filter(aula => aula.aula_id == dados_aula.id).length > 0;

    if (!detalhesJaGravados) {

      this.servicoDeAulas.getMaisDadosDaAula(dados_aula.id).subscribe(data => {
        console.log(dados_aula.id);
        this.aulas_detalhes.push(data);
      });

    } 
  }

  detalhesDestaAula(id_da_aula : number) {
    if (this.aulas_detalhes.length > 0) {
      return this.aulas_detalhes.filter(aula => aula.aula_id == id_da_aula)[0];
    } return {
      faltas : [{nome : '', tipodefalta : ''}],
      ocorrencia : [{titulo : '', descricao : ''}],
      aula_id : 0
    }
  }

  sumarios! : Array<sumarios_tipo>;
  semanas : Array<string> = [];
  tool_tip  : string = 'Semana ';

  /*
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
  */

}
