import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos__/alunos.component';
import { Routes, RouterModule } from '@angular/router';
import { CardDoAlunoComponent } from './card-do-aluno/card-do-aluno.component';
import { FichaDoAlunoComponent } from './ficha-do-aluno/ficha-do-aluno.component';
import { BreadcrumbModule } from '../recursos-visuais/breadcrumb/breadcrumb.module';

const routes : Routes = [
  {
    path : '', 
    component : AlunosComponent,
    children : [
       { path : '', component : CardDoAlunoComponent },
       { path : ':codigo_do_aluno', component : FichaDoAlunoComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AlunosComponent,
    FichaDoAlunoComponent,
    CardDoAlunoComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    CardDoAlunoComponent
  ]
})
export class FuncionalidadeAlunosModule { }
