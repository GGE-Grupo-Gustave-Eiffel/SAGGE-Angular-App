import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermoComponent } from './termo/termo.component';
import { TermosComponent } from './termos__/termos.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path : '', component : TermosComponent
  }
];

@NgModule({
  declarations: [
    TermoComponent,
    TermosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [TermoComponent]
})
export class FuncionalidadeDosTermosModule { }
