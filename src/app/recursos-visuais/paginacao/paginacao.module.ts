import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginacaoComponent } from './paginacao.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PaginacaoComponent],
  imports: [
    CommonModule,
    NgbTooltipModule
  ],
  exports : [
    PaginacaoComponent
  ]
})
export class PaginacaoModule { }
