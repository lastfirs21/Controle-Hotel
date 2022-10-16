import { Router, RouterModule } from '@angular/router';
import { QuartoService } from './../services/quarto.service';
import { Quarto } from './../models/quarto.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-novo-quarto',
  templateUrl: './novo-quarto.component.html',
  styleUrls: ['./novo-quarto.component.scss'],
})
export class NovoQuartoComponent {

  quarto: Quarto = new Quarto();

  constructor(private service: QuartoService, private router : Router) {}

  criarQuarto() {
    console.log('Novo Quarto Criado');
    const novoQuarto: Quarto = {
      descricao: this.quarto.descricao,
      valor: this.quarto.valor,
    };

    this.service.adicionaQuarto(novoQuarto).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('listar-quartos');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
   this.quarto = new Quarto();
  }
}
