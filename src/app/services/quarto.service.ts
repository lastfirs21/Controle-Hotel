import { Quarto } from './../models/quarto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuartoService {
  private quartos: Quarto[];
  private url =  'https://localhost:5001/quarto'

  constructor(private httpClient: HttpClient) {
    this.quartos = [];
  }



   listarQuartosGet() : Observable<Quarto[]> {
    return this.httpClient.get<Quarto[]>(this.url);
   }

  adicionaQuarto(quarto: Quarto): Observable<Quarto> {
    return this.httpClient.post<Quarto>(this.url, quarto);
  }

  buscaQuartoPorId(id : number | string)
  {
    return this.httpClient.get<Quarto>(this.url+"/"+id);
  }
}
