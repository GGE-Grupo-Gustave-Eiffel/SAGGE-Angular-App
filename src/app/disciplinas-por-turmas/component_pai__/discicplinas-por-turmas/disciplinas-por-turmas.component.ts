import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas-por-turmas',
  templateUrl: './disciplinas-por-turmas.component.html',
  styleUrls: ['./disciplinas-por-turmas.component.css']
})
export class DisciplinasPorTurmasComponent implements OnInit {

  disciplinas : Array<any> = [
    {nome : 'Língua Portuguesa'},
    {nome : 'Biologia'},
    {nome : 'Matemática'},
    {nome : 'Física'},
    {nome : 'Geografia'},
    {nome : 'Educação Física'},
    {nome : 'Informática'}

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
