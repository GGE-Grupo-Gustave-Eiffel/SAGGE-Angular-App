import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorDePedidosService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req : HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();
    req = req.clone({
      setHeaders : {
        Authorization : "Bearer " + accessToken
      }
    });
    return next.handle(req);
  }
}
