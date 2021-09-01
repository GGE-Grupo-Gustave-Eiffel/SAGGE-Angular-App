import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil__/perfil.component';
import { Routes, RouterModule } from '@angular/router';
import { AlertModule } from '../recursos-visuais/alert/alert.module';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

const routes : Routes = [
  {path : '', component : PerfilComponent}
]

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PerfilDoUtilizadorModule { }
