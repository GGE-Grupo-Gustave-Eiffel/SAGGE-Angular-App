import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('testes do Component de Login', () => {

  let component_login : LoginComponent;
  let fixture : ComponentFixture<LoginComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations : [LoginComponent],
      imports : [FormsModule, ReactiveFormsModule]
    });
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component_login = fixture.componentInstance;
    component_login.ngOnInit();
  });

  it('deve retornar um formulário inválido assim que o compnent de login carregar', () => {
    expect(component_login.loginForm.valid).toBeFalsy();
  });

  it('deve falhar a autenticação para correios eletrónicos inválidos no campo de email', () => {
    let email_test : string = 'abcgmailcom';
    let campo_do_email = component_login.loginForm.controls['email'];
    campo_do_email.setValue(email_test);
    let erros_do_email = campo_do_email.errors || {};
    expect(erros_do_email['pattern']).toBeTruthy();
  });

  it('deve falhar a autenticação para senhas < 8 caracteres no campo de senha', () => {
    let senha_test : string = '1234567';
    let campo_da_senha = component_login.loginForm.controls['senha'];
    campo_da_senha.setValue(senha_test);
    expect(campo_da_senha.valid).toBeFalsy();
  });

  it('deve desactivar o botão de submissão do formulário se pelo menos um dos campos for inválido', () => {
    let campo_da_senha = component_login.loginForm.controls['senha'];
    let campo_do_email = component_login.loginForm.controls['email'];

    campo_do_email.setValue('abc@gmail.com');
    campo_da_senha.setValue('1234567');

    expect(component_login.loginForm.valid).toBeFalsy();
  });

});
