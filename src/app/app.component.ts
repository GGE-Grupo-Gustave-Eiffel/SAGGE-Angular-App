import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public containerClass : any = {
    default : 'full',
    responsive : 'responsive'
  };

  public columnsClasses : any = {
    default : 'col-lg-12',
    responsive : 'col-lg-8'
  };

  public actualContainerClass = this.containerClass['default'];
  public actualColumnClass = this.columnsClasses['default'];
  
  // estes métds manipulam classes para maior responsividade
  iconMenuOpened() {
    
  }

  iconMenuClosed() {
    
  }

  fullMenuOpen() {
    this.actualContainerClass = this.containerClass['responsive']
  }

  fullMenuClosed() {
    this.actualContainerClass = this.containerClass['default']
  }

}
