import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EstadoDeAutenticacaoService } from '../estado-de-autenticacao.service';


@Injectable({
  providedIn: 'root'
})
export class LoginblockService implements CanActivate {

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
      this.router.navigateByUrl('/turmas');
      return false;
    } else {
      return true;
    }
  }
 
}
