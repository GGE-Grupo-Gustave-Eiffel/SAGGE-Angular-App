import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SenharesetService {

  constructor(private http : HttpClient) {}

  mudarSenha(data : any) : Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/mudarsenha', data);
  }
}
