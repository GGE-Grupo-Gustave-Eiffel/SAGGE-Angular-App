import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarDirective } from './recursos-visuais/directivos/navbar.directive';
import { NavbarComponent } from './recursos-visuais/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TriggerDirective } from './recursos-visuais/directivo-trigger/trigger.directive';
import { MenuDirective } from './recursos-visuais/directivo-menu/menu.directive';
import { ConteudoIndisponivelComponent } from './recursos-visuais/conteudo-indisponivel/conteudo-indisponivel.component';
import { AuthGuardService } from './utilitarios/servicos/servicos-de-guarda-de-rota/auth-guard.service';
import { PaginaDasEscolasComponent } from './pagina-das-escolas/pagina-das-escolas.component';
import { TurmasGuardService } from './pagina-das-escolas/servicos/turmas-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorDePedidosService } from './utilitarios/servicos/interceptor-de-pedidos.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarDirective,
    NavbarComponent,
    LoginComponent,
    TriggerDirective,
    MenuDirective,
    ConteudoIndisponivelComponent,
    PaginaDasEscolasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorDePedidosService,
      multi: true
    },
    AuthGuardService,
    TurmasGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
