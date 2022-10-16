import { Hospedagem } from './../models/hospedagem.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospedagemService {
  private hospedagens: Hospedagem[];
  private url = 'https://localhost:5001/hospedagem';

  constructor(private httpClient: HttpClient) {
    this.hospedagens = [];
  }

  listarHospedagens(): Observable<Hospedagem[]> {
    return this.httpClient.get<Hospedagem[]>(this.url);
  }

  adicionaHospedagem(hospedagem: Hospedagem): Observable<Hospedagem> {
    return this.httpClient.post<Hospedagem>(this.url, hospedagem);
  }
}
