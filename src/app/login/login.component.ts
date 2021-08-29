import { Component, OnInit, Query} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { LoginServicosService } from '../utilitarios/servicos/login-servicos.service';
import { TokenService } from '../utilitarios/servicos/token.service';
import { Router, ActivatedRoute } from '@angular/router'
import { EstadoDeAutenticacaoService } from '../utilitarios/servicos/estado-de-autenticacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  return : string = '';  

  public loginForm! : FormGroup;
  public errors = null;
  
  constructor(
      private formBuilder : FormBuilder, 
      private loginService : LoginServicosService,
      private token : TokenService,
      private router : Router, 
      private route : ActivatedRoute,
      private estadoAuth : EstadoDeAutenticacaoService
    ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.return = params['return'] || '/'
    });

    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required , Validators.pattern("[^@]*@[^@]*")]],
      password : ['', [Validators.required , Validators.minLength(8)]]
    }); 
  }

  onSubmit() {
    this.loginService.signin(this.loginForm.value).subscribe(
      result => {
        this.responseHandler(result);
      },
      error => {
        console.log(error.error);
        this.errors = error.error;
      }, () => {
        this.estadoAuth.setAuthState(true);
        this.loginForm.reset();
        this.router.navigateByUrl(this.return);
      }
    );
  }

  responseHandler(data : any) {
    this.token.handleData(data.access_token);
  }
}
