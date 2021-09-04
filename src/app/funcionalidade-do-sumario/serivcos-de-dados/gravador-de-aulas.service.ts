import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GravadorDeAulasService {

  id_da_turma! : number;

  constructor(private http : HttpClient) {}

  gravar_aula(obj_da_aula : any) {
    return this.http.post('http://127.0.0.1:8000/api/auth/gravaraula', obj_da_aula);
  }

}
