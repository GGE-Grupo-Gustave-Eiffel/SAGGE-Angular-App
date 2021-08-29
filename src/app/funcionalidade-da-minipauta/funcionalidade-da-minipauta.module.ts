import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinipautaComponents } from './minipautas__/minipauta.component';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MinipautaComponent } from './minipauta/minipauta.component';
import { PaginacaoModule } from '../recursos-visuais/paginacao/paginacao.module';
import { CartaoInfoModule } from '../recursos-visuais/cartao-info/cartao-info.module'

const routes : Routes = [
  {
    path : '',
    component : MinipautaComponents,
    children : [
      {
        path : '',
        component : DisciplinasComponent
      },
      {
        path : ':disciplina',
        component : MinipautaComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MinipautaComponents,
    MinipautaComponent,
    DisciplinasComponent
  ],
  imports: [
    CommonModule,
    CartaoInfoModule,
    PaginacaoModule,
    NgbTooltipModule,
    RouterModule.forChild(routes)
  ]
})
export class FuncionalidadeDaMinipautaModule { }
