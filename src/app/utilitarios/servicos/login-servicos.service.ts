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
    return this.http.post('https://cepph.com/api/auth/register', user);
  }
 
  signin(user : any) : Observable<any> {
    return this.http.post<any>('https://cepph.com/api/auth/login', user);
  }

  logout() : Observable<any> {
    return this.http.post<any>('https://cepph.com/api/auth/logout', {});
  }
  
  profileUser() : Observable<any> {
    return this.http.get<any>('https://cepph.com/api/auth/userprofile');
  }

}
