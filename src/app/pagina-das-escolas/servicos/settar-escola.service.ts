import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettarEscolaService {

  public setar_escola(nome_da_escola : string) {
      localStorage.setItem('nome_da_escola', nome_da_escola);
  }

  public aceder_escola_actual() {
    return localStorage.getItem('nome_da_escola') == "" ? false : true;
  }  
}
