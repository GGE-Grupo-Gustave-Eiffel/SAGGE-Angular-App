import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-de-pesquisa',
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrls: ['./barra-de-pesquisa.component.css']
})
export class BarraDePesquisaComponent implements OnInit {

  @Input() formulario_placeholder : string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
