import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MensageiroService } from '../../utilitarios/servicos/mensageiro.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/utilitarios/servicos/token.service';
import { EstadoDeAutenticacaoService } from 'src/app/utilitarios/servicos/estado-de-autenticacao.service';
import { LoginServicosService } from 'src/app/utilitarios/servicos/login-servicos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estado_de_sessao! : boolean;

  constructor(
    private autent : EstadoDeAutenticacaoService,
    public router : Router,
    public token : TokenService,
    public authService : LoginServicosService
  ) { }

  ngOnInit() {
    this.autent.userAuthState.subscribe(val => {
      this.estado_de_sessao = val;
    });
  }

  // saír da conta
  sair_da_conta() {

    this.authService.logout().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error.error);
      }, () => {
        this.autent.setAuthState(false);
        this.token.removeToken();
        this.router.navigate(['/']);
      }
    );
    
  }

}
