import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumario',
  templateUrl: './sumario.component.html',
  styleUrls: ['./sumario.component.css']
})
export class SumarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  temposDeAula : any = [
    {
      turma : '7ªClasse',
      disciplina : 'Biologia',
      temposLectivos : 1,
      id : 1,
    },
    {
      turma : '10ªC.F.B',
      disciplina : 'Biologia',
      temposLectivos : 2,
      id : 2
    },
    {
      turma : '9ªClasse',
      disciplina : 'Biologia',
      temposLectivos : 2,
      id : 3
    }
  ];

  bandeira_aviso : any = {id : 0};
  desactivador_dos_campos_do_formulario : boolean = true;
  campo_bloqueado : string = 'input-blocked';

  tempoLectivoActivo(tempoId : any) {
    if (!this.bandeira_aviso.id) {
      this.bandeira_aviso = {id : tempoId}
      this.desactivador_dos_campos_do_formulario = false;
      this.campo_bloqueado = '';
    } else if (this.bandeira_aviso.id === tempoId) {
      this.bandeira_aviso = {id : 0};
      this.desactivador_dos_campos_do_formulario = true;
      this.campo_bloqueado = 'input-blocked';
    } 
  }

 

}

