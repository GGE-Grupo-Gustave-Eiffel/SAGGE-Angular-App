import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path : '', 
    loadChildren: () => import('./component_pai__/main.module').then(m => m.MainModule)
  }
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : []
})
export class DisciplinasModule { }
