import { Component, OnInit } from '@angular/core';
import { identificador, tempoLectivo } from '../../utilitarios/tipos';
import { tempos_lectivos } from '../../utilitarios/dados_falso';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { HorariosService } from '../serivcos-de-dados/horarios.service';
import { LoginServicosService } from 'src/app/utilitarios/servicos/login-servicos.service';
import { AlunosService } from '../serivcos-de-dados/alunos.service';

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-sumario',
  templateUrl: './sumario.component.html',
  styleUrls: ['./sumario.component.css'],
})
export class SumarioComponent implements OnInit {
  /* funcionalidade da barra de sugestão */

  alunos: Array<any> = [
    /*
  
    'João Carlos/Azul',
    'João Carlos/Vermelha',
    'João Carlos/Preta',
    'Ricardo Marcelino/Azul',
    'Ricardo Marcelino/Vermelha',
    'Ricardo Marcelino/Preta',
    */
  ];

  constructor(
    private horarios : HorariosService, 
    private loginService : LoginServicosService,
    private alunosService : AlunosService
  ) {}

  public model: any;
  alunos_com_outras_faltas: Array<any> = [];
  alunos_com_falta_vermelha: Array<any> = [];
  alunos_com_falta_preta: Array<any> = [];
  alunos_com_falta_azul: Array<any> = [];
  alunos_faltosos: Array<any> = [];

  
  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.alunos
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

  temposDeAula: Array<tempoLectivo> = [];//tempos_lectivos;
  mostrar_form_adicional: boolean = false;

  bandeira_aviso: identificador = { id: 0, tempos: 0 };
  desactivador_dos_campos_do_formulario: boolean = true;
  campo_bloqueado: string = 'input-blocked';

  msg_de_espera : string = 'carregando Informações...';

  ngOnInit() {

    this.loginService.profileUser().subscribe((professor : any) => {
      
      this.horarios.get_horarios_do_professor(professor.id).subscribe((data : any) => {
        this.temposDeAula = data.horarios;
      }); 

    });

    
    this.alunosService.get_alunos(1).subscribe((turma : any) => {
      this.alunos = turma.alunos;
      console.log(this.alunos);
    });

  }

  selectionar_tempo_lectivo(tempoId: any) {
    this.alunos_faltosos = [];
    this.alunos_com_falta_azul = [];
    this.alunos_com_falta_vermelha = [];
    this.alunos_com_falta_preta = [];
    this.alunos_com_outras_faltas = [];

    if (!this.bandeira_aviso.id) {
      this.bandeira_aviso = { id: tempoId.id, tempos: tempoId.tempos };
      this.desactivador_dos_campos_do_formulario = false;
      this.campo_bloqueado = '';
    } else if (this.bandeira_aviso.id === tempoId.id) {
      this.bandeira_aviso = { id: 0, tempos: tempoId.tempos };
      this.desactivador_dos_campos_do_formulario = true;
      this.campo_bloqueado = 'input-blocked';
    }
  }

  mostrar_outro_form() {
    this.mostrar_form_adicional === true
      ? (this.mostrar_form_adicional = false)
      : (this.mostrar_form_adicional = true);
  }

  adicionar_aluno() {
    if (this.model != '') {
      // para falta azul:
      let tipo_da_falta = this.extrair_classe(this.model);
      let aluno_faltoso = this.extrair_nome(this.model);

      switch (tipo_da_falta) {
        // só poderá marcar se este aluno não tem falta vermelha ou de material
        case 'Azul':
          if (
            this.alunos_faltosos.filter(
              (aluno) => aluno.split('/')[0] == aluno_faltoso
            ).length < this.bandeira_aviso.tempos
          ) {
            if (
              this.alunos_com_falta_azul.filter(
                (aluno) => aluno.split('/')[0] == aluno_faltoso
              ).length < this.bandeira_aviso.tempos
            ) {
              this.alunos_faltosos.push(this.model);
              this.alunos_com_falta_azul.push(aluno_faltoso);
            } else {
              this.model = '';
            }
          } else {
            this.model = '';
          }
          break;
        // (faltas vermelhas) só poderá marcar se este aluno não tiver falta azul e não tem falta vermelha
        case 'Vermelha':
          if (
            this.alunos_com_falta_azul.filter(
              (aluno) => aluno.split('/')[0] == aluno_faltoso
            ).length < this.bandeira_aviso.tempos &&
            this.alunos_com_falta_vermelha.indexOf(aluno_faltoso) == -1
          ) {
            this.alunos_faltosos.push(this.model);
            this.alunos_com_falta_vermelha.push(aluno_faltoso);
            this.alunos_com_outras_faltas.push(aluno_faltoso);
          } else {
            this.model = '';
          }
          break;
        // (faltas pretas) só poderá marcar se este aluno não tiver falta azul e não tem falta preta
        default:
          if (
            this.alunos_com_falta_azul.filter(
              (aluno) => aluno.split('/')[0] == aluno_faltoso
            ).length < this.bandeira_aviso.tempos &&
            this.alunos_com_falta_preta.indexOf(aluno_faltoso) == -1
          ) {
            this.alunos_faltosos.push(this.model);
            this.alunos_com_falta_preta.push(aluno_faltoso);
            this.alunos_com_outras_faltas.push(aluno_faltoso);
          } else {
            this.model = '';
          }
      }
    }
  }

  extrair_classe(texto_para_extrair: string) {
    return texto_para_extrair.split('/')[1];
  }

  extrair_nome(texto_para_extrair: string) {
    return texto_para_extrair.split('/')[0];
  }

  extrair_tipo_de_falta(texto_para_extrair: string) {
    if (this.extrair_classe(texto_para_extrair) == 'Azul') {
      return 'Ausência';
    } else if (this.extrair_classe(texto_para_extrair) == 'Vermelha') {
      return 'Falta por Indisciplina';
    } else {
      return 'Falta de Material';
    }
  }

  fechar_toast(aluno: string) {

    switch(this.extrair_classe(aluno)) {
      case 'Azul':
        let numero_de_alunos_com_falta_azul = this.alunos_com_falta_azul.length;
        this.alunos_com_falta_azul = [];
        for (let contador_faltoso = 0; contador_faltoso < (numero_de_alunos_com_falta_azul - 1); contador_faltoso++) {
          this.alunos_com_falta_azul.push(this.extrair_nome(aluno));
        }
        break; 
    }    

    let falta_para_apagar = aluno;
    let faltas_deste_tipo = this.alunos_faltosos.filter(falta => falta == falta_para_apagar);  
    let faltas_que_nao_sao_deste_tipo = this.alunos_faltosos.filter(falta => falta != falta_para_apagar);  

    let nova_lista_de_falta = faltas_que_nao_sao_deste_tipo;

    for (let contador_faltas = 0; contador_faltas < (faltas_deste_tipo.length - 1); contador_faltas++) {
      nova_lista_de_falta.push(faltas_deste_tipo[contador_faltas]);
    }

    this.alunos_faltosos = nova_lista_de_falta;
  }
}
