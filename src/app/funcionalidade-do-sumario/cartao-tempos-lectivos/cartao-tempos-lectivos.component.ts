import { Component, Output, EventEmitter, Input } from '@angular/core';
import { identificador, tempoLectivo } from '../../utilitarios/tipos';

@Component({
  selector: 'app-cartao-tempos-lectivos',
  templateUrl: './cartao-tempos-lectivos.component.html',
  styleUrls: ['./cartao-tempos-lectivos.component.css']
})
export class CartaoTemposLectivosComponent {

  @Input()
  bandeira_aviso! : identificador;

  @Input()
  tempos_de_aula! : tempoLectivo;
  
  @Output()
  ao_activar_tempo_lectivo : EventEmitter<any> = new EventEmitter();

  classe_padrao_dos_cartoes : string = "formbg";

  activar_tempo_lectivo() {
    this.ao_activar_tempo_lectivo.emit({
      id : this.tempos_de_aula.id, 
      tempos : this.tempos_de_aula.tempos_lectivos, 
      turma : this.tempos_de_aula.turma,
      nome_turma : this.tempos_de_aula.nome,
      disciplina : this.tempos_de_aula.disciplina
    });
  }

  descricao_tempos_lectivos(tempos : number) {
    if (tempos > 1) {
      return `${tempos} tempos`;
    } else return `${tempos} tempo`;
  }

  setar_classe_para_tempo_selecionado() {
    if (this.bandeira_aviso.id == this.tempos_de_aula.id) {
      return this.classe_padrao_dos_cartoes == "formbg selected" ? "formbg" : "formbg selected";
    }
    return this.classe_padrao_dos_cartoes;
  }

}
