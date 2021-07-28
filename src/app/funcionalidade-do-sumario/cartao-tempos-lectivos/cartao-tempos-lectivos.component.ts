import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-tempos-lectivos',
  templateUrl: './cartao-tempos-lectivos.component.html',
  styleUrls: ['./cartao-tempos-lectivos.component.css']
})
export class CartaoTemposLectivos {

  @Input()
  bandeira_aviso : any;

  @Input()
  temposDeAula : any;
  
  @Output()
  onTempoLectivoActivo : EventEmitter<null> = new EventEmitter();

  classeDoCardDoTempo : string = "formbg";

  activarTempoLectivo() {
    this.onTempoLectivoActivo.emit(this.temposDeAula.id);
  }

  descricao_tempos_lectivos(tempos : number) {
    if (tempos > 1) {
      return `${tempos} tempos`;
    } else return `${tempos} tempo`;
  }

  setarClassParaTempoSelecionado() {
    if (this.bandeira_aviso.id == this.temposDeAula.id) {
      return this.classeDoCardDoTempo == "formbg selected" ? "formbg" : "formbg selected";
    }
    return this.classeDoCardDoTempo;
  }

}
