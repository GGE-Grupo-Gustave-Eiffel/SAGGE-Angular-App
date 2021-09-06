import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { turma_tipo } from '../../utilitarios/tipos'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicosDeDadosService {
  constructor(private http : HttpClient) { }
  
  get_turmas(professorid : number) : Observable<any> {
    return this.http.get<turma_tipo>(`https://cepph.com/api/auth/turmas/${professorid}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error : HttpErrorResponse) : any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backedn returned code ${error.status}` + 
        `body was : ${error.error}`
      )
      return throwError (
        'Servidor desconectado, tente mais tarde'
      )
    }
  }


}
