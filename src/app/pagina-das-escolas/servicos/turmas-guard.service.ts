import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SettarEscolaService } from './settar-escola.service';

@Injectable({
  providedIn: 'root'
})
export class TurmasGuardService implements CanActivate {

  constructor(private router : Router, private escola_selecionador : SettarEscolaService) { }

  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    if (this.escola_selecionador.aceder_escola_actual()) {
      return true;
    } else {
      
      this.router.navigate(['/'], {
        queryParams : {
          return : state.url
        }
      });
    
      return false;
    }
  }
  
}
