export class Hospede{
  id?: number | string;
  nome: string;
  cpf : string;
  dataNasc : Date;
  cep : string;
  estado : string;
  cidade : string;
  rua : string;
  numero : string | number;
  bairro : string;
  complemento : string;




  constructor() {
  this.nome = "",
  this.cpf = "",
  this.estado = "",
  this.cidade = "",
  this.rua = "",
  this.numero = "",
  this.bairro = "",
  this.complemento = ""
  }
}
