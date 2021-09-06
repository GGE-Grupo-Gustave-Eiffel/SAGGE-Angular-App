import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetdisciplinasService {

  constructor(private http : HttpClient) { }

  get_disciplinas(turma_id : number) {
    return this.http.get<any>(`https://cepph.com/api/auth/disciplinas/${turma_id}`);
  }


}
