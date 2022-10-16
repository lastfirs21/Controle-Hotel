import { HospedeService } from './../../services/hospede.service';
import { Component, OnInit } from '@angular/core';
import { Hospede } from 'src/app/models/hospede.model';

@Component({
  selector: 'app-listar-hospedes',
  templateUrl: './listar-hospedes.component.html',
  styleUrls: ['./listar-hospedes.component.scss'],
})
export class ListarHospedesComponent implements OnInit {
  hospedes: Hospede[];

  constructor(private service: HospedeService) {}

  ngOnInit() {
    this.service.listarHospedes().subscribe((hospedes: Hospede[]) => {
      console.table(hospedes);
      this.hospedes = hospedes;
    });
  }
}
