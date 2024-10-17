export interface IFaturaCreate {
  id: number;
  numero_cliente: string;
  mes_referencia: Date;
  energia_eletrica_kwh: number;
  energia_eletrica_valor: number;
  energia_scee_sem_icms_kwh: number;
  energia_scee_sem_icms_valor: number;
  energia_compensada_gd_kwh: number;
  energia_compensada_gd_valor: number;
  contribuicao_ilum_pub_municipal_valor: number;
  criado_em: Date;
}

export interface IFaturaCreateResponse {
  id: number;
  numeroCliente: string;
  mesReferencia: Date;
  energiaEletricaKwh: number;
  energiaEletricaValor: number;
  energiaSceeSemIcmsKwh: number;
  energiaSceeSemIcmsValor: number;
  energiaCompensadaGdKwh: number;
  energiaCompensadaGdValor: number;
  contribuicaoIlumPubMunicipalValor: number;
  criadoEm: Date;
}


export interface IFaturaResponse {
  numeroCliente: string;
  consumoEnergiaEletricaKwh: number, //corresponde ao somatório das variáveis Energia Elétrica kWh + Energia SCEEE s/ICMS kWh
  energiaCompensadaKwh: number, //corresponde à variável ‘Energia Compensada GD I (kWh)’
  valorTotalSemGd: number, //somatório dos valores faturados de ‘Energia Elétrica (R$)’ + ‘Energia SCEE s/ ICMS (R$)’ + ‘Contrib Ilum Publica Municipal (R$)’
  economiaGD: number, //corresponde à ‘Energia compensada GD I (R$)’.
  mesReferencia: Date;
  criadoEm: Date;
}