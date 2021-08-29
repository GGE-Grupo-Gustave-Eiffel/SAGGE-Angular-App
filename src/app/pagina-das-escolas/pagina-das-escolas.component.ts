import { Component, OnInit } from '@angular/core';
import { SettarEscolaService } from './servicos/settar-escola.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pagina-das-escolas',
  templateUrl: './pagina-das-escolas.component.html',
  styleUrls: ['./pagina-das-escolas.component.css']
})
export class PaginaDasEscolasComponent implements OnInit {

  return : string = '';

  constructor(
    private escola_selecionador : SettarEscolaService,
    private router : Router, 
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.return = params['return'] || '/'
    });
  }

  selecionar_escola(nome_da_escola : string) {
    this.escola_selecionador.setar_escola(nome_da_escola);
    this.router.navigateByUrl(this.return);
  }

}
