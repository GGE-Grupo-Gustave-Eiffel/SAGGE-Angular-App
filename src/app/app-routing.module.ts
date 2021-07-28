import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sumario',
    loadChildren: () => import('../app/funcionalidade-do-sumario/sumarios.module').then(m => m.SumariosModule)
  },
  {
    path : '**',
    pathMatch: 'full', 
    loadChildren :() => import('./pagina-404/error-page.module').then(m => m.ErrorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
