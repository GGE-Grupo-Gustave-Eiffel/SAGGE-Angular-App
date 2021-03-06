import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SumarioComponent } from './sumario__/sumario.component';
import { Routes, RouterModule } from '@angular/router';
import { CartaoTemposLectivosComponent } from './cartao-tempos-lectivos/cartao-tempos-lectivos.component';
import { ArrowTogglerDirective } from './sumario__/arrow-toggler.directive';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoadingModule } from '../recursos-visuais/loading/loading.module';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { AlertModule } from '../recursos-visuais/alert/alert.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertasdinamicosModule } from '../recursos-visuais/alertas-dinamicos/alertasdinamicos.module';

const routes : Routes = [
  {path : '', component : SumarioComponent}
]

@NgModule({
  declarations: [
    SumarioComponent,
    CartaoTemposLectivosComponent,
    ArrowTogglerDirective
  ],
  imports: [
    CommonModule,
    NgbToastModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    LoadingModule,
    MatInputModule,
    NgbModule,
    NgxTypeaheadModule,
    AlertModule,
    AlertasdinamicosModule,
    RouterModule.forChild(routes)
  ]
})
export class SumariosModule { }
