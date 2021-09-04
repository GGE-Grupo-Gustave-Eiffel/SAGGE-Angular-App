import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface User {

}

@Injectable({
  providedIn: 'root'
})
export class LoginServicosService {

  constructor(private http : HttpClient) {}

  register(user : any) : Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }
 
  signin(user : any) : Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
  }

  logout() : Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/logout', {});
  }
  
  profileUser() : Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/auth/userprofile');
  }

}
