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

 
  public actualContainerClass = this.containerClass['default'];
  
  
  

}
