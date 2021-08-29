import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EstadoDeAutenticacaoService } from '../estado-de-autenticacao.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  public estado_de_autenticacao : boolean = false;

  constructor(
    private router : Router,
    private estadoAutenticacao : EstadoDeAutenticacaoService
    ) { }

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {

    this.estadoAutenticacao.userAuthState.subscribe((val) => {
      this.estado_de_autenticacao = val;
    });

    if (this.estado_de_autenticacao) {
      return true;
    } else {
      
      this.router.navigate(['/login'], {
        queryParams : {
          return : state.url
        }
      });
    
      return false;
    }
  }
}

