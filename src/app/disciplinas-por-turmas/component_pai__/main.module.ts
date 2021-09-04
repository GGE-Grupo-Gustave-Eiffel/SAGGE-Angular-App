import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinasPorTurmasComponent } from './discicplinas-por-turmas/disciplinas-por-turmas.component';

const routes : Routes = [
  {
    path : '', 
    component : DisciplinasPorTurmasComponent
  },
  {
    path : ':disciplina_nome',
    loadChildren: () => import('../../funcionalidade-das-aulas/funcionalidade-das-aulas.module').then(m => m.FuncionalidadeDasAulasModule)
  }
      
]

@NgModule({
  declarations: [
    DisciplinasPorTurmasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
