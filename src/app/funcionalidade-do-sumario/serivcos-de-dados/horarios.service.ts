import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServicosService } from 'src/app/utilitarios/servicos/login-servicos.service';


@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  id_do_professor! : number;

  constructor(private http : HttpClient) {}
  
  get_horarios_do_professor(professor_id : number) : Observable<any> {
    return this.http.get<any>(`https://cepph.com/api/auth/horarios/${professor_id}`);
  }
}
