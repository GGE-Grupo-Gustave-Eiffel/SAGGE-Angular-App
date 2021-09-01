import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaDasEscolasComponent } from './pagina-das-escolas/pagina-das-escolas.component';
import { TurmasGuardService } from './pagina-das-escolas/servicos/turmas-guard.service';
import { AuthGuardService } from './utilitarios/servicos/servicos-de-guarda-de-rota/auth-guard.service';

const routes: Routes = [
  {
    path : '',
    component : PaginaDasEscolasComponent
  },
  {
    path: 'turmas',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'login',
    loadChildren: () => import('../app/login/login.module').then(m => m.LoginModule),
    data : {
      title : 'Iniciar sessão'
    }
  },
  {
    path : 'perfil',
    loadChildren: () => import('../app/perfil-do-utilizador/perfil-do-utilizador.module').then(m => m.PerfilDoUtilizadorModule)
  },
  {
    path : 'signup',
    loadChildren: () => import('../app/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'sumario',
    loadChildren: () => import('../app/funcionalidade-do-sumario/sumarios.module').then(m => m.SumariosModule),
    canActivate : [AuthGuardService],
    data : {
      title : 'sumário'
    }
  },
  /*
  {
    path : 'aulas',
    loadChildren : () => import('../app/funcionalidade-das-aulas/funcionalidade-das-aulas.module').then(m => m.FuncionalidadeDasAulasModule)
  },
  {
    path : 'alunos',
    loadChildren : () => import('../app/funcionalidade-alunos/funcionalidade-alunos.module').then(m => m.FuncionalidadeAlunosModule)
  },
  {
    path : 'termos',
    loadChildren : () => import('../app/funcionalidade-dos-termos/funcionalidade-dos-termos.module').then(m => m.FuncionalidadeDosTermosModule),
  },
  {
    path : 'professores',
    loadChildren : () => import('../app/funcionalidade-professores/funcionalidade-professores.module').then(m => m.FuncionalidadeProfessoresModule),
  },
  {
    path : 'minipautas',
    loadChildren : () => import('../app/funcionalidade-da-minipauta/funcionalidade-da-minipauta.module').then(m => m.FuncionalidadeDaMinipautaModule),
  },
  {
    path : 'horarios',
    loadChildren : () => import('../app/funcionalidade-do-horario/funcionalidade-do-horario.module').then(m => m.FuncionalidadeDoHorarioModule),
  },
  {
    path : 'autenticacao',
    loadChildren :() => import('./pagina-usuario-nao-autenticado/pagina-usuario-nao-autenticado.module').then(m => m.PaginaUsuarioNaoAutenticadoModule)
  },
  */
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
