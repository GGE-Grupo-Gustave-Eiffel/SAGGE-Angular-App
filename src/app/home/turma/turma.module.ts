import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaComponent } from './turma__/turma.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path : '', component : TurmaComponent,
    children : [
      {
        path : '', 
        loadChildren: () => import('../turma/turma/turma.module').then(m => m.TurmaModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    TurmaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TurmaModule { }
