import { Component, OnInit } from '@angular/core';
import { LoginServicosService } from 'src/app/utilitarios/servicos/login-servicos.service';

export interface User {}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  UserProfile : any;

  constructor(public loginService : LoginServicosService) {
    this.loginService.profileUser().subscribe((data : any) => {
      this.UserProfile = data;
    });
  }

  ngOnInit(): void {}

}
