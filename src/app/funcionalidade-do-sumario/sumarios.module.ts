import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumarioComponent } from './sumario__/sumario.component';
import { Routes, RouterModule } from '@angular/router';
import { CartaoTemposLectivosComponent } from './cartao-tempos-lectivos/cartao-tempos-lectivos.component';

const routes : Routes = [
  {path : '', component : SumarioComponent}
]

@NgModule({
  declarations: [
    SumarioComponent,
    CartaoTemposLectivosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SumariosModule { }
