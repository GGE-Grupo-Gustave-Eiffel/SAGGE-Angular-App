import { Component, Input, Output, EventEmitter } from '@angular/core';
import { links_tipos, sumarios_tipo } from '../../utilitarios/tipos';
import { faltas_por_aluno } from '../../utilitarios/recursos';

@Component({
  selector: 'app-cartao-info',
  templateUrl: './cartao-info.component.html',
  styleUrls: ['./cartao-info.component.css']
})
export class CartaoInfoComponent {

  @Input()
  info_da_aula! : sumarios_tipo;

  @Input()
  detalhes! : any;

  @Output()
  ao_clicar_em_aula : EventEmitter<any> = new EventEmitter();

  aula_clicada() {
    this.ao_clicar_em_aula.emit({id : this.info_da_aula.id});
  }

  descricao_das_faltas() {
    return faltas_por_aluno(this.detalhes?.faltas);
  }

  descricao_da_ocorrencia() {
    if (!this.detalhes || this.detalhes.ocorrencia[0].titulo == '')  return false;
    return true; 
  }

  // mensagens de informação:
  sem_faltas_msg : string = 'Não foram registadas faltas nesta aula';
  sem_ocorr_msg : string = 'aulas sem ocorrências!'
  sem_faltas_ou_ocorr_msg : string = 'Sem faltas ou ocorrências registadas';

  constructor() { }  
}
