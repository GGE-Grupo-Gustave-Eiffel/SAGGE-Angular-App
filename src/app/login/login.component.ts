import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { UsernameValidator } from './login.form.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public loginForm : FormGroup;

  constructor(private formBuilder : FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    }); 
  }

  save() {
    console.log(this.loginForm.value);
  }

}
