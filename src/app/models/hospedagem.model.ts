import { Hospede } from './hospede.model';
import { Quarto } from './quarto.model';

export class Hospedagem {
  id?: number | string;
  dataCheckIn: Date;
  dataCheckOut: Date;
  quartoId: number | string;
  quarto?: Quarto;
  hospedeId: number | string;
  hospede?: Hospede;
  statusHospedagem?: number | string;

  constructor(
    dataCheckIn: Date,
    dataCheckOut: Date,
    quartoId: number | string,
    hospedeId: number | string
  ) {
    this.dataCheckIn = dataCheckIn;
    this.dataCheckOut = dataCheckOut;
    this.quartoId = quartoId;
    this.hospedeId = hospedeId;
  }
}
