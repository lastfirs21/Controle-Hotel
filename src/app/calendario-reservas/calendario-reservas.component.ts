import { CalendarioService } from './../services/calendario.service';
import { HospedeService } from './../services/hospede.service';
import { Hospedagem } from './../models/hospedagem.model';
import { Quarto } from './../models/quarto.model';
import { QuartoService } from './../services/quarto.service';
import { DiasCalendario } from './../models/diasCalendario.model';
import { HospedagemService } from './../services/hospedagem.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hospede } from '../models/hospede.model';

@Component({
  selector: 'app-calendario-reservas',
  templateUrl: './calendario-reservas.component.html',
  styleUrls: ['./calendario-reservas.component.scss'],

})



export class CalendarioReservasComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<Hospedagem>();



  dataAtual: Date = new Date();
  diasReservados : Date[] = [];
  quartoAtual: Quarto = new Quarto();
  hospedeAtual: Hospede;
  quartos: Quarto[];
  diasCalendario: DiasCalendario[] = [];
  dataCheckIn: Date;
  dataCheckOut: Date;
  hospede: Hospede;
  hospedes: Hospede[];
  observacoes: string;
  valorTotalReserva: number = 0;
  quantidadeDeHospedes: number = 1;
  qtdDiasReservados: number = 0;





  constructor(
    private hospedagemService: HospedagemService,
    private quartoService: QuartoService,
    private calendarioService: CalendarioService,
    private hospedeService: HospedeService
  ) {}

  ngOnInit() {
    this.quartoAtual.id =1;
    this.hospedeService.listarHospedes().subscribe((hospedes: Hospede[]) =>
      {
        this.hospedes = hospedes;
        this.hospedeAtual = new Hospede();
        this.hospedeAtual = this.hospedes[0];
      }
      );
      this.quartoService.listarQuartosGet().subscribe((quartos: Quarto[]) => {
        this.quartoAtual = quartos[0];
        this.quartos = quartos;
        this.construirCalendario();
      }  );



  }

  construirCalendario() {

    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();
    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6; // sábado


    this.calendarioService.listarReservas(this.quartoAtual.id, mes+1).subscribe((reservas : Date[]) =>
    {
      this.diasReservados = reservas;


        // Vai subtraindo -1 até chegarmos no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    // Vai somando +1 até chegarmos no último dia da semana
    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }


    for (
      let data = new Date(dataInicial);
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    )
    {





      if (this.diasReservados.find((d) => new Date(d).getDate() == data.getDate()))
       {
        this.diasCalendario.push(
          new DiasCalendario(new Date(data), 1)
        );
      }
             else{
              if (new Date(this.dataCheckIn).getTime() == data.getTime())
              {
               this.diasCalendario.push(
                 new DiasCalendario(new Date(data), 2)
               );
              }
              else if (new Date(this.dataCheckOut).getTime() == data.getTime())
              {
               this.diasCalendario.push(
                 new DiasCalendario(new Date(data), 3)
               );
              }
              else{

                this.diasCalendario.push(
                  new DiasCalendario(new Date(data), 0)
                  );
                }
              }
              }
    });
  }


  alteraHospede(id){
    this.hospedeAtual = new Hospede();
    this.hospedeAtual = this.hospedes[id.value];
  }

  recalculaValor(qtd)
  {
    if(this.dataCheckIn == null || this.dataCheckOut == null)
    {
      this.limparDiasSelecionados(3);
    }
    else{

      this.quantidadeDeHospedes = qtd.value;
      console.log(this.quantidadeDeHospedes);
      this.valorTotalReserva= this.quantidadeDeHospedes* this.quartoAtual.valor*(
        this.dataCheckOut.getDate()-this.dataCheckIn.getDate());
      }
  }


  criarHospedagem(){


    if(this.dataCheckIn == null || this.dataCheckOut == null)
    {
      this.limparDiasSelecionados(3);
    }
    else{

      const hospedagem = new Hospedagem(this.dataCheckIn, this.dataCheckOut, this.quartoAtual.id, this.hospedeAtual.id);
      this.hospedagemService.adicionaHospedagem(hospedagem).subscribe((resultado) => {
        this.limparVariaveis();
        this.construirCalendario();
      });
    }
  }


  alterarQuarto(id) {
    this.limparDiasSelecionados(0);
    this.limparVariaveis();
    this.quartoAtual = this.quartos.find((t) => t.id == id.value)
    this.construirCalendario();
  }

  alterarMes(offsetMes: number) {
    this.limparVariaveis();
    this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
    this.dataAtual = new Date(this.dataAtual.getTime());
    this.construirCalendario();
  }
  limparVariaveis() {
    this.diasReservados = [];
    this.diasCalendario = [];
    //this.limparDiasSelecionados(0);
  }




  defineDia(data: Date) {

    if(this.dataCheckIn != null && this.dataCheckOut != null)
    {
      this.limparDiasSelecionados(0);
    }


    if(data == this.dataCheckIn)
    {
      this.diasCalendario.find((d) => d.data == this.dataCheckIn).statusHospedagem = 0;
      this.dataCheckIn = null;
    }
    else{
        if(this.dataCheckIn == null)
        {
          this.dataCheckIn = data;
          this.diasCalendario.find((d) => d.data == this.dataCheckIn).statusHospedagem = 2;
        }
        else{
          if(data < this.dataCheckIn || data < this.dataCheckOut) // valida se o checkout é maior q checkin
          {
            this.limparDiasSelecionados(1);
          }


          else
          {
            let diaMaximo=0;


            const diasMes = this.diasCalendario.filter(t=> t.data.getMonth() == this.dataAtual.getMonth());

            for(let i = 0; i<diasMes.length; i++)
            {
              if(diasMes[i].data.getDate() > this.dataCheckIn.getDate())
              {
                if(diasMes[i].statusHospedagem == 1)
                {
                diaMaximo = i;
                break;
              }
            }
          }
          console.log(diasMes[diaMaximo]);




            console.log(data.getDate());

            if(data.getDate() > diasMes[diaMaximo].data.getDate())
            {
              this.limparDiasSelecionados(2); //TODO: finalizar validação do dia próximo mes
            }




            else{
              this.dataCheckOut = data;
              this.diasCalendario.find((d) => d.data == this.dataCheckOut).statusHospedagem = 3;
              this.qtdDiasReservados = this.dataCheckOut.getDate()-this.dataCheckIn.getDate();
            }
          }

    }
  }
}


  limparDiasSelecionados(motivo){

    if(motivo == 2)
    {
      alert("Selecione um Período de Dias que não possua Reservas");
    }
    if(motivo == 1)
    {
      alert("A Data de CheckOut deve Ser Maior que a de CheckIn ");
    }
    if(motivo == 3)
    {
      alert("Selecione a Data de Check In e Check Out ");
    }

    for( let i = 0; i<this.diasCalendario.length; i++)
    {
      if(this.diasCalendario[i].statusHospedagem >= 2  )
      {
        this.diasCalendario[i].statusHospedagem = 0;
      }
    }
    this.dataCheckIn = null;
    this.dataCheckOut = null;
    this.qtdDiasReservados =0;
  }

}
