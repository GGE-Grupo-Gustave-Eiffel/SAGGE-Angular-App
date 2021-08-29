import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http : HttpClient) { }
  
  get_horarios_do_professor() : Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/auth/horarios/1');
  }
}
