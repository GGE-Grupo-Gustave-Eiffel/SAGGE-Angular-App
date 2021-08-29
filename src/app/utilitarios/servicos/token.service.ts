import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private issuer = {
    login : 'http://127.0.0.1:8000/api/auth/login'
  }

  constructor() { }

  handleData(data : any) {
    localStorage.setItem('auth_token', data);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  isValidToken() : any {
    const token = this.getToken();

    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
      }
    } else {
      return false;
    }
  }

  payload(token : any) {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  isLoggedIn() {
    return this.isValidToken();
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }

}
