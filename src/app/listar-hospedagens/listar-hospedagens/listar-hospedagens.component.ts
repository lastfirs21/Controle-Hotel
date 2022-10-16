import { QuartoService } from './../../services/quarto.service';
import { HospedagemService } from './../../services/hospedagem.service';
import { Hospedagem } from './../../models/hospedagem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-hospedagens',
  templateUrl: './listar-hospedagens.component.html',
  styleUrls: ['./listar-hospedagens.component.scss'],
})
export class ListarHospedagensComponent implements OnInit {
  hospedagens: Hospedagem[];

  constructor(private service: HospedagemService, private quartoService: QuartoService) {}

  ngOnInit() {
    this.service.listarHospedagens().subscribe((hospedagens: Hospedagem[]) => {
      console.table(hospedagens);

      this.hospedagens = hospedagens.sort((a, b) => new Date(b.dataCheckOut).getTime() - new Date(a.dataCheckIn).getTime());
    });
  }



}
