import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoInfoComponent } from './cartao-info.component';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { RouterModule } from '@angular/router';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  declarations: [CartaoInfoComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    AlertModule,
    RouterModule
  ],
  exports : [
    CartaoInfoComponent
  ]
})
export class CartaoInfoModule { }
