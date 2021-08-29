import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MensageiroService } from '../../utilitarios/servicos/mensageiro.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/utilitarios/servicos/token.service';
import { EstadoDeAutenticacaoService } from 'src/app/utilitarios/servicos/estado-de-autenticacao.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  estado_de_sessao! : boolean;

  faCoffee = faCoffee;

  constructor(
    private autent : EstadoDeAutenticacaoService,
    public router : Router,
    public token : TokenService
  ) { }

  ngOnInit() {
    this.autent.userAuthState.subscribe(val => {
      this.estado_de_sessao = val;
    });
  }

  // saír da conta
  sair_da_conta() {
    this.autent.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

}
