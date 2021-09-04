import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router'
import { EstadoDeAutenticacaoService } from 'src/app/utilitarios/servicos/estado-de-autenticacao.service';
import { LoginServicosService } from 'src/app/utilitarios/servicos/login-servicos.service';
import { TokenService } from 'src/app/utilitarios/servicos/token.service';
import { SenharesetService } from '../servicos/senhareset.service';


export interface User {}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public msg_info : string = 'Digite na caixa de texto abaixo a sua nova senha';
  public errors = null;
  public form! : FormGroup;
  public user_id! : number;


  constructor(
      public loginService : LoginServicosService,
      public servicoDeMudancaDeSenha : SenharesetService,
      private formBuilder : FormBuilder, 
      private estadoAuth : EstadoDeAutenticacaoService,
      private token : TokenService,
      private router : Router
    ) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      password : ['', [Validators.required , Validators.minLength(8)]],
      id : ['', [Validators.required]]
    }); 

    this.loginService.profileUser().subscribe((data : any) => {
      // actualize o valor do id do utilizador:
      this.form.controls['id'].setValue(data.id);
    });  
  }

  onSubmit() {
  
    this.servicoDeMudancaDeSenha.mudarSenha(this.form.value).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error.error);
        this.errors = error.error;
      }, () => {
        this.sair_da_conta();
      }
    );
  }

  // saír da conta
  sair_da_conta() {
    this.loginService.logout().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error.error);
      }, () => {
        this.estadoAuth.setAuthState(false);
        this.token.removeToken();
        this.router.navigate(['login']);
      }
    );   
  
  }

}
