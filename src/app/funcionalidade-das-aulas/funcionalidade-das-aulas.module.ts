import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulasComponent } from './aulas__/aulas.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginacaoModule } from '../recursos-visuais/paginacao/paginacao.module';
import { CartaoInfoModule } from '../recursos-visuais/cartao-info/cartao-info.module'
import { AulaComponent } from './aula/aula.component';
import { EditarAulaComponent } from './editar-aula/editar-aula.component';
import { AulasComponentDefault } from './aulas/aulas.component';
import { ArrowTogglerDirective } from '../funcionalidade-do-sumario/sumario__/arrow-toggler.directive';

const routes : Routes = [
  {
    path : '', component : AulasComponent,
    children : [
     { path : '', component : AulasComponentDefault },
     { path : 'aula', component : AulaComponent },
     { path : 'editar', component : EditarAulaComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AulasComponent,
    AulasComponentDefault,
    AulaComponent,
    EditarAulaComponent
  ],
  imports: [
    CommonModule,
    CartaoInfoModule,
    PaginacaoModule,
    RouterModule.forChild(routes)
  ]
})
export class FuncionalidadeDasAulasModule { }
