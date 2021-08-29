import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServicosService } from '../utilitarios/servicos/login-servicos.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm : FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService : LoginServicosService
  ) {

    this.registerForm = this.fb.group({
      name : [''],
      email : [''],
      password : [''],
      password_confirmation : ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.error(error.error);
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    )
  }

}
