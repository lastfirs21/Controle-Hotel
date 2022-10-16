import { QuartoService } from './../services/quarto.service';
import { Quarto } from './../models/quarto.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-quartos',
  templateUrl: './listar-quartos.component.html',
  styleUrls: ['./listar-quartos.component.scss'],
})
export class ListarQuartosComponent implements OnInit {
  quartos: Quarto[];

  constructor(private service: QuartoService) {}

  ngOnInit() {
    // this.quartos = this.service.listarQuartos;
    this.service
      .listarQuartosGet()
      .subscribe((quartos: Quarto[]) => {
        console.table(quartos);
        this.quartos = quartos;
      });
  }
}
