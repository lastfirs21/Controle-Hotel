import { CalendarioReservasComponent } from './calendario-reservas/calendario-reservas.component';
import { ListarHospedagensComponent } from './listar-hospedagens/listar-hospedagens/listar-hospedagens.component';
import { ListarHospedesComponent } from './listar-hospedes/listar-hospedes/listar-hospedes.component';
import { NovoHospedeComponent } from './novo-hospede/novo-hospede.component';
import { NovoQuartoComponent } from './novo-quarto/novo-quarto.component';
import { ListarQuartosComponent } from './listar-quartos/listar-quartos.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'listar-quartos', pathMatch: 'full'},
  {path: 'listar-quartos', component: ListarQuartosComponent},
  {path: 'listar-hospedes', component: ListarHospedesComponent},
  {path: 'listar-hospedagens', component: ListarHospedagensComponent},
  {path: 'novo-quarto', component: NovoQuartoComponent},
  {path: 'novo-hospede', component: NovoHospedeComponent},
  {path: 'calendario-reservas', component: CalendarioReservasComponent},
]

@NgModule(
  {
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
  }
)

export class AppRoutingModule
{

}
