import { Hospede } from './../models/hospede.model';
import { HospedeService } from './../services/hospede.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-hospede',
  templateUrl: './novo-hospede.component.html',
  styleUrls: ['./novo-hospede.component.scss'],
})
export class NovoHospedeComponent {
  hospede: Hospede = new Hospede();

  constructor(private service: HospedeService, private router: Router) {}

  criarHospede() {
    console.log('Novo Hospede Criado');
    const novoHospede: Hospede = this.hospede;
    this.service.adicionaHospede(novoHospede).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('listar-hospedes');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.hospede = new Hospede();
  }
}
