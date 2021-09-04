import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AulasService } from '../serivo-de-dados/aulas.service';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  constructor(
    private route_activa : ActivatedRoute,
    private servicosDeAulas : AulasService
  ) { }

  ngOnInit(): void {
    this.route_activa.params.subscribe((params : Params) => {
      this.servicosDeAulas.getMaisDadosDaAula(params['iddaaula']).subscribe(data => {
        console.log(data);
      })  
    });
  }

}
