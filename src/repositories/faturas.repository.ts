import { PrismaClient } from "@prisma/client";

import type { IFaturaCreate, IFaturaCreateResponse } from "../interfaces/fatura.interface";
import type { IFaturaRepository } from "../interfaces/faturasRepository.interface";
import { FaturaCreateDTO } from "../dtos/faturaCreate.dto";
import { plainToClass } from 'class-transformer'
const prisma = new PrismaClient;

export class FaturasRepository implements IFaturaRepository {
  async create(fatura: FaturaCreateDTO): Promise<IFaturaCreateResponse> {
    const faturaData = {
      numero_cliente: fatura.numeroCliente,
      mes_referencia: new Date(fatura.mesReferencia),
      energia_eletrica_kwh: fatura.energiaEletricaKwh,
      energia_eletrica_valor: fatura.energiaEletricaValor,
      energia_scee_sem_icms_kwh: fatura.energiaSceeSemIcmsKwh,
      energia_scee_sem_icms_valor: fatura.energiaSceeSemIcmsValor,
      energia_compensada_gd_kwh: fatura.energiaCompensadaGdKwh,
      energia_compensada_gd_valor: fatura.energiaCompensadaGdValor,
      contribuicao_ilum_pub_municipal_valor: fatura.contribuicaoIlumPubMunicipalValor,
    };
    
    console.log(faturaData);

    const createdFatura = await prisma.fatura.create({
      data: faturaData,
    });


    const response: IFaturaCreateResponse = {
      id: createdFatura.id,
      numeroCliente: createdFatura.numero_cliente || '',
      mesReferencia: createdFatura.mes_referencia || new Date(),
      energiaEletricaKwh: Number(createdFatura.energia_eletrica_kwh) || 0,
      energiaEletricaValor: Number(createdFatura.energia_eletrica_valor) || 0,
      energiaSceeSemIcmsKwh: Number(createdFatura.energia_scee_sem_icms_kwh) || 0,
      energiaSceeSemIcmsValor: Number(createdFatura.energia_scee_sem_icms_valor) || 0,
      energiaCompensadaGdKwh: Number(createdFatura.energia_compensada_gd_kwh) || 0,
      energiaCompensadaGdValor: Number(createdFatura.energia_compensada_gd_valor) || 0,
      contribuicaoIlumPubMunicipalValor: Number(createdFatura.contribuicao_ilum_pub_municipal_valor) || 0,
      criadoEm: createdFatura.criado_em || new Date(),
    };

    return response;
  }
}