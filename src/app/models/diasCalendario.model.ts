export class DiasCalendario{
  data: Date;
  statusHospedagem? : number | string;

  constructor(data, status)
  {
    this.data = data;
    this.statusHospedagem = status;
  }

}
