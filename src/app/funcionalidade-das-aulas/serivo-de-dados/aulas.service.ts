import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  constructor(private http : HttpClient) { }

  getAulas(dados : any) : Observable<any> {
    return this.http.get<any>(`https://cepph.com/api/auth/aulas/${dados}`);
  }

  getMaisDadosDaAula(idDaAula : number) : Observable<any> {
    return this.http.get<any>(`https://cepph.com/api/auth//aula/${idDaAula}`);
  }
}
