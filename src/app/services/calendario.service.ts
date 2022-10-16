import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private url = 'https://localhost:5001/calendario';


  constructor(private httpClient: HttpClient) {
  }

  listarReservas(id, mes): Observable<Date[]> {
    return this.httpClient.get<Date[]>(this.url+"/"+id+"?mes="+mes);
  }


}
