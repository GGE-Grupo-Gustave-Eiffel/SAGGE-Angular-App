import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDePesquisaComponent } from './barra-de-pesquisa.component';


@NgModule({
  declarations: [BarraDePesquisaComponent],
  imports: [
    CommonModule
  ],
  exports : [BarraDePesquisaComponent]
})
export class BarraDePesquisaModule { }
