import { Expose } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class FaturaCreateDTO {
  @Expose({ name: 'numero_cliente' })
  @IsString()
  numeroCliente: string;

  @Expose({ name: 'mes_referencia' })
  @IsDateString()
  mesReferencia: string;

  @Expose({ name: 'energia_eletrica_kwh' })
  @IsNumber()
  energiaEletricaKwh: number;

  @Expose({ name: 'energia_eletrica_valor' })
  @IsNumber()
  energiaEletricaValor: number;

  @Expose({ name: 'energia_scee_sem_icms_kwh' })
  @IsNumber()
  energiaSceeSemIcmsKwh: number;

  @Expose({ name: 'energia_scee_sem_icms_valor' })
  @IsNumber()
  energiaSceeSemIcmsValor: number;

  @Expose({ name: 'energia_compensada_gd_kwh' })
  @IsNumber()
  energiaCompensadaGdKwh: number;

  @Expose({ name: 'energia_compensada_gd_valor' })
  @IsNumber()
  energiaCompensadaGdValor: number;

  @Expose({ name: 'contribuicao_ilum_pub_municipal_valor' })
  @IsNumber()
  contribuicaoIlumPubMunicipalValor: number;

  constructor(
    numeroCliente: string,
    mesReferencia: string,
    energiaEletricaKwh: number,
    energiaEletricaValor: number,
    energiaSceeSemIcmsKwh: number,
    energiaSceeSemIcmsValor: number,
    energiaCompensadaGdKwh: number,
    energiaCompensadaGdValor: number,
    contribuicaoIlumPubMunicipalValor: number
  ) {
    this.numeroCliente = numeroCliente;
    this.mesReferencia = mesReferencia;
    this.energiaEletricaKwh = energiaEletricaKwh;
    this.energiaEletricaValor = energiaEletricaValor;
    this.energiaSceeSemIcmsKwh = energiaSceeSemIcmsKwh;
    this.energiaSceeSemIcmsValor = energiaSceeSemIcmsValor;
    this.energiaCompensadaGdKwh = energiaCompensadaGdKwh;
    this.energiaCompensadaGdValor = energiaCompensadaGdValor;
    this.contribuicaoIlumPubMunicipalValor = contribuicaoIlumPubMunicipalValor;
  }
}
