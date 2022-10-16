import { AppRoutingModule } from './app-routing.module';
import { NovoHospedeComponent } from './novo-hospede/novo-hospede.component';
import { NovoQuartoComponent } from './novo-quarto/novo-quarto.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListarQuartosComponent } from './listar-quartos/listar-quartos.component';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListarHospedesComponent } from './listar-hospedes/listar-hospedes/listar-hospedes.component';
import { ListarHospedagensComponent } from './listar-hospedagens/listar-hospedagens/listar-hospedagens.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarioReservasComponent } from './calendario-reservas/calendario-reservas.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovoQuartoComponent,
    NovoHospedeComponent,
    ListarQuartosComponent,
    ListarHospedesComponent,
    ListarHospedagensComponent,
    CalendarioReservasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
