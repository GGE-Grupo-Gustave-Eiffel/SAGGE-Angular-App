import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes : Routes = [
    {path : '', component : HomeComponent}
];

@NgModule({
    declarations : [
        HomeComponent
    ],
    imports : [
        CommonModule,
        RouterModule.forChild(routes),
        NgbModule,
        FontAwesomeModule
    ]
})
export class HomeModule {}

