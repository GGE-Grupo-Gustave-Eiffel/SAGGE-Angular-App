import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TurmaComponentChild } from './painel-principal/turma.component';
import { BreadcrumbModule } from 'src/app/recursos-visuais/breadcrumb/breadcrumb.module';

const routes : Routes = [
  {
    path : '', component : TurmaComponentChild,
  },
  {
    path : 'alunos', 
    loadChildren: () => import('../../../funcionalidade-alunos/funcionalidade-alunos.module').then(m => m.FuncionalidadeAlunosModule)
  },
  {
    path : 'aulas',
    loadChildren: () => import('../../../funcionalidade-das-aulas/funcionalidade-das-aulas.module').then(m => m.FuncionalidadeDasAulasModule)
  },
  {
    path : 'termos',
    loadChildren: () => import('../../../funcionalidade-dos-termos/funcionalidade-dos-termos.module').then(m => m.FuncionalidadeDosTermosModule)
  },
  {
    path : 'professores',
    loadChildren: () => import('../../../funcionalidade-professores/funcionalidade-professores.module').then(m => m.FuncionalidadeProfessoresModule) 
  },
  {
    path : 'horarios',
    loadChildren: () => import('../../../funcionalidade-do-horario/funcionalidade-do-horario.module').then(m => m.FuncionalidadeDoHorarioModule)
  },
  {
    path : 'minipautas',
    loadChildren: () => import('../../../funcionalidade-da-minipauta/funcionalidade-da-minipauta.module').then(m => m.FuncionalidadeDaMinipautaModule)
  }
];  

@NgModule({
  declarations: [
    TurmaComponentChild
  ],
  imports: [
    CommonModule,
    BreadcrumbModule, 
    RouterModule.forChild(routes)
  ]
})
export class TurmaModule { }
