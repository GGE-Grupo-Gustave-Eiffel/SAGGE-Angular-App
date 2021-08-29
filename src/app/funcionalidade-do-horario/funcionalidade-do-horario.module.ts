import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorariosComponent } from './horarios__/horarios.component';
import { Routes, RouterModule } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HorarioComponent } from './horario.component';

const routes : Routes = [
  {
    path : '',
    component : HorariosComponent,
    children : [
      {path : '', component : HorarioComponent}
    ]
  }
]

@NgModule({
  declarations: [
    HorarioComponent,
    HorariosComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ]
})
export class FuncionalidadeDoHorarioModule { }
