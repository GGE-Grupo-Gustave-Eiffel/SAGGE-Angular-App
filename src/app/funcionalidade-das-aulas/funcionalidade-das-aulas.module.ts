import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulasComponent } from './aulas__/aulas.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginacaoModule } from '../recursos-visuais/paginacao/paginacao.module';
import { CartaoInfoModule } from '../recursos-visuais/cartao-info/cartao-info.module'
import { AulaComponent } from './aula/aula.component';
import { EditarAulaComponent } from './editar-aula/editar-aula.component';
import { AulasComponentDefault } from './aulas/aulas.component';
import { LoadingModule } from '../recursos-visuais/loading/loading.module';

const routes : Routes = [
  {
    path : '', 
    component : AulasComponent,
    children : [
      { path : '', component : AulasComponentDefault },
      { path : ':iddaaula', component : AulaComponent },
    ] 
  }
]

@NgModule({
  declarations: [
    AulasComponent,
    AulasComponentDefault,
    AulaComponent,
    EditarAulaComponent
  ],
  imports: [
    CommonModule,
    CartaoInfoModule,
    PaginacaoModule,
    LoadingModule,
    RouterModule.forChild(routes)
  ]
})
export class FuncionalidadeDasAulasModule { }
