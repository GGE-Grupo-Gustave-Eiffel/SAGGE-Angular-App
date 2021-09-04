import { Component, OnInit } from '@angular/core';
import { identificador, tempoLectivo } from '../../utilitarios/tipos';
import { tempos_lectivos } from '../../utilitarios/dados_falso';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { HorariosService } from '../serivcos-de-dados/horarios.service';
import { LoginServicosService } from 'src/app/utilitarios/servicos/login-servicos.service';
import { AlunosService } from '../serivcos-de-dados/alunos.service';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { UtilService } from './servicos_de_utilidades/util.service';
import { GravadorDeAulasService } from '../serivcos-de-dados/gravador-de-aulas.service';
import { TokenService } from 'src/app/utilitarios/servicos/token.service';
import { switchMap } from 'rxjs/operators';

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-sumario',
  templateUrl: './sumario.component.html',
  styleUrls: ['./sumario.component.css'],
})
export class SumarioComponent implements OnInit {

  temposDeAula: Array<tempoLectivo> = []; //tempos_lectivos;
  mostrar_form_adicional: boolean = false;
  public model : any;

  bandeira_aviso: identificador = { id: 0, tempos: 0 };
  desactivador_dos_campos_do_formulario: boolean = true;
  campo_bloqueado: string = 'input-blocked';
  id_da_turma_anterior! : number;

  msg_de_espera: string = 'a carregar Informações...';
  msg_de_info : string = 'Escreva o nome do aluno abaixo e marque a falta';

  public aulaForm! : FormGroup;
  
  constructor(
    private horarios: HorariosService,
    private loginService: LoginServicosService,
    private alunosService: AlunosService,
    private gestorDeFaltas : UtilService,
    private gravadorDeAulas : GravadorDeAulasService,
    private formBuilder : FormBuilder, 
    private token : TokenService,
    config: NgbTypeaheadConfig
  ) {
    config.showHint = true;
  }


  /*--------- Funcionalidade do typeahead ----------*/
  faltas : Array<any> = []

  alunos : Array<any> = [];
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.alunos.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
    )

  /*---------- Funcionalidade do typeahead ---------*/


  ngOnInit() {

    this.loginService.profileUser().pipe(
      switchMap(professor => {
        return this.horarios
        .get_horarios_do_professor(professor.id)
      })
    ).subscribe(data => {
      this.temposDeAula = data.horarios;
    });

    this.aulaForm = this.formBuilder.group({
      sumario : ['', [Validators.required]],
      turma_nome : ['', [Validators.required]],
      disciplina : ['', [Validators.required]],
      tempos : ['', [Validators.required]],
      faltas : [[]],
      ocorrencia_titulo : [''],
      occorencia_descricao : [''],
    }); 
  }

  public selectionar_tempo_lectivo(tempoId: any) {

    // limpa campos
    this.model = '';
    this.faltas = [];


    if (!this.bandeira_aviso.id) {
      this.bandeira_aviso = { id: tempoId.id, tempos: tempoId.tempos };
      this.desactivador_dos_campos_do_formulario = false;
      this.campo_bloqueado = '';

      this.aulaForm.controls['turma_nome'].setValue(tempoId.nome_turma);
      this.aulaForm.controls['disciplina'].setValue(tempoId.disciplina);
      this.aulaForm.controls['tempos'].setValue(tempoId.tempos);

      // carrega a lista dos alunos desta turma no backend
      if (this.id_da_turma_anterior != tempoId.turma) {
        this.alunosService.get_alunos(tempoId.turma).subscribe((turma: any) => {
          
          // I might refactor this code for perfomance reasons
          let faltas_tipos = 0;
          let tipos_de_falta = ['Ausência', 'Indisciplina', 'Material'];

          turma.alunos.forEach((aluno : any) => {
            while (faltas_tipos < 3) {
              this.alunos.push(aluno + '-' + `${tipos_de_falta[faltas_tipos]}`);
              faltas_tipos++;
            }
          faltas_tipos = 0;
          });

          this.id_da_turma_anterior = tempoId.turma;
        });

      }
      
    } else if (this.bandeira_aviso.id === tempoId.id) {
      this.bandeira_aviso = { id: 0, tempos: tempoId.tempos };
      this.desactivador_dos_campos_do_formulario = true;
      this.campo_bloqueado = 'input-blocked';
    }
  }

  public mostrar_outro_form() {
    this.mostrar_form_adicional === true
      ? (this.mostrar_form_adicional = false)
      : (this.mostrar_form_adicional = true);
  }

  public apagaEstaFalta (falta : any) {
    let index = falta.id;
    this.faltas = this.faltas.filter(falta => falta.id != index);
    this.aulaForm.controls['faltas'].setValue(this.faltas);
  }

  public marcarFalta() {

    if (this.alunos.filter(aluno => aluno == this.model).length > 0 ) {
      let falta_indx = this.faltas.length;
      this.gestorDeFaltas.marcar_falta(
        this.faltas, 
        this.model, falta_indx,
        this.bandeira_aviso.tempos
      )
    }

     // limpe alguns campos:
     this.model = '';

     // actualize o campo das faltas no formulário
     this.aulaForm.controls['faltas'].setValue(this.faltas);
  }


  onSubmit() {
    this.gravadorDeAulas.gravar_aula(this.aulaForm.value).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error.error);
      }, () => {
        this.aulaForm.reset();
        this.faltas = [];
        this.bandeira_aviso = { id: 0, tempos: 0 }; 
      }
    );
  }
}
