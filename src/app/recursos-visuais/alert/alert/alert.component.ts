import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() 
  msg_para_mostrar! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
