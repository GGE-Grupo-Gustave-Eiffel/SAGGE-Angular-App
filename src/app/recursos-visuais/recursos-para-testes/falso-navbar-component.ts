import { Component } from '@angular/core';

@Component({
    template : `
        <ul id="gn-menu" class="gn-menu-main" appSubNav>
    <li class="gn-trigger">
      <a class="gn-icon gn-icon-menu"><span>Menu</span></a>

      <nav class="gn-menu-wrapper">
        <div class="gn-scroller">
          <ul class="gn-menu">
            <li class="gn-search-item">
              <input placeholder="Procurar" type="search" class="gn-search">
              <a class="gn-icon gn-icon-search"><span></span></a>
            </li>
            <li>
              <a class="gn-icon gn-icon-download">Avaliações</a>
            </li>
            <li>
              <a class="gn-icon gn-icon-illustrator">Relatórios</a>
            </li>
            <li>
              <a routerLink="sumario" class="gn-icon gn-icon-photoshop">Sumários</a>
            </li>
            <li><a class="gn-icon gn-icon-cog">Encarregados</a></li>
            <li><a class="gn-icon gn-icon-help">Alunos</a></li>
            <li>
              <a class="gn-icon gn-icon-archive">calendário</a>
            </li>
            <li><a class="gn-icon gn-icon-article">Horários</a></li>
            <li><a class="gn-icon gn-icon-pictures"></a></li>
            <li><a class="gn-icon gn-icon-videos"></a></li>

          </ul>
        </div><!-- /gn-scroller -->
      </nav>

    </li>
    <li><a href="#">SAGE</a></li>
    <li class="upper-li"><a class="codrops-icon codrops-icon-prev" href="#"><span class="link-menu">Previous
          Demo</span></a></li>
    <li class="upper-li"><a class="codrops-icon codrops-icon-drop" routerLink="login"><span class="link-menu">Iniciar
          Sessão</span></a></li>
  </ul>
    `
})
export class NavbarFalsoComponent {}