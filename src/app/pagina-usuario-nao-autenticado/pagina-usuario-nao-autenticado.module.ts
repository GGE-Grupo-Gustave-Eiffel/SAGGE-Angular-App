import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaUsuarioNaoAutenticadoComponent } from './pagina-usuario-nao-autenticado.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : '', component : PaginaUsuarioNaoAutenticadoComponent}
]

@NgModule({
  declarations: [
    PaginaUsuarioNaoAutenticadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaginaUsuarioNaoAutenticadoModule { }
