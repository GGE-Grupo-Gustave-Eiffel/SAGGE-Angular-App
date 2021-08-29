import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  @Input() mostrar_spinner : boolean = false;
  @Input() msg_de_espera : string = "";

  constructor() { }
}
