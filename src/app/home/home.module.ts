import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home__/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TurmasComponent } from './turmas/turmas.component';
import { BarraDePesquisaModule } from "../recursos-visuais/barra-de-pesquisa/barra-de-pesquisa.module";


const routes : Routes = [
    {
        path : '', component : HomeComponent,
        children : [
            {
                path : '',
                component : TurmasComponent
            },
            {
                path : ':codigo_da_turma',
                loadChildren: () => import('./turma/turma.module').then(m => m.TurmaModule)
            }
        ]
    }
];

@NgModule({
    declarations : [
        HomeComponent,
        TurmasComponent
    ],
    imports : [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        BarraDePesquisaModule,
        FontAwesomeModule
    ]
})
export class HomeModule {}

