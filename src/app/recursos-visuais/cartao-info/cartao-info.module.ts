import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoInfoComponent } from './cartao-info.component';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [CartaoInfoComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports : [
    CartaoInfoComponent
  ]
})
export class CartaoInfoModule { }
