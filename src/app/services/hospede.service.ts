import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospede } from '../models/hospede.model';

@Injectable({
  providedIn: 'root',
})
export class HospedeService {
  private hospedes: Hospede[];
  private url = 'https://localhost:5001/hospede';

  constructor(private httpClient: HttpClient) {
    this.hospedes = [];
  }

  listarHospedes(): Observable<Hospede[]> {
    return this.httpClient.get<Hospede[]>(this.url);
  }

  adicionaHospede(hospede: Hospede): Observable<Hospede> {
    return this.httpClient.post<Hospede>(this.url, hospede);
  }
}
