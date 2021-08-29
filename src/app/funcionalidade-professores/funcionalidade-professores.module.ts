import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresComponent } from './professores__/professores.component';
import { FuncionalidadeAlunosModule } from '../funcionalidade-alunos/funcionalidade-alunos.module';
import { Routes, RouterModule } from '@angular/router';
import { CardDoAlunoComponent } from '../funcionalidade-alunos/card-do-aluno/card-do-aluno.component';

const routes : Routes = [
  {
    path : '',
    component : ProfessoresComponent,
    children : [
      { path : '', component : CardDoAlunoComponent }
//      { path : ':codigo_do_aluno', component : FichaDoAlunoComponent}
    ]
  }
]


@NgModule({
  declarations: [
    ProfessoresComponent
  ],
  imports: [
    CommonModule,
    FuncionalidadeAlunosModule,
    RouterModule.forChild(routes)
  ]
})
export class FuncionalidadeProfessoresModule { }
