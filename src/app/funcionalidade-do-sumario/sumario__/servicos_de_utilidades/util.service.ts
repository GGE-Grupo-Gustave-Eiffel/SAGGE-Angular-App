import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  marcar_falta(listaDeFaltas : Array<any>, falta : any, falta_id : number, tempos : number) {

    if (listaDeFaltas.filter(faltaMarcada => faltaMarcada.nome == falta.split('-')[0]).length < tempos) {
      let nome_do_aluno = falta.split('-')[0];
      let tipo_de_falta = falta.split('-')[1];
      let objecto_da_falta = {nome : nome_do_aluno, falta : tipo_de_falta, id : falta_id}

      switch(tipo_de_falta) {
        case 'Ausência':
          this.marcar_ausencia(objecto_da_falta, listaDeFaltas);
          break;
        case 'Indisciplina':
          this.marcar_disciplinar(objecto_da_falta, listaDeFaltas)
          break;
        default :
          this.marcar_material(objecto_da_falta, listaDeFaltas)
      }
    }

  }

  marcar_ausencia(obj_da_falta : any, listaDeFaltas : Array<any>) {
    listaDeFaltas.push(obj_da_falta);  
  }

  marcar_disciplinar(obj_da_falta : any, listaDeFaltas : Array<any>) {
    let numero_de_faltas_vermelhas = listaDeFaltas.filter(falta => falta.nome == obj_da_falta.nome && falta.falta == 'Indisciplina').length;
    if (numero_de_faltas_vermelhas == 0) {
      listaDeFaltas.push(obj_da_falta);
    }
  }

  marcar_material (obj_da_falta : any, listaDeFaltas : Array<any>) {
    let numero_de_faltas_pretas = listaDeFaltas.filter(falta => falta.nome == obj_da_falta.nome && falta.falta == 'Material').length;
    if (numero_de_faltas_pretas == 0) {
      listaDeFaltas.push(obj_da_falta);
    }
  }

}
