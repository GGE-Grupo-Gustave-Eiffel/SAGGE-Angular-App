import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  id_da_turma! : number;

  constructor(private http : HttpClient) {}
  
  get_alunos(turma_id : number) : Observable<any> {
    return this.http.get<any>(`https://cepph.com/api/auth/alunos/${turma_id}`);
  }
}
