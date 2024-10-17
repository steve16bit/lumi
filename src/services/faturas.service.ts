import type { FaturaCreateDTO } from "../dtos/faturaCreate.dto";
import type { IFaturaCreate, IFaturaCreateResponse } from "../interfaces/fatura.interface";
import { IFaturaService } from "../interfaces/faturasService.interface";
import { FaturasRepository } from "../repositories/faturas.repository";

export class FaturasService implements IFaturaService {
  constructor(private faturasRepository: FaturasRepository) {
    this.faturasRepository = new FaturasRepository();
  }

  async create(data: FaturaCreateDTO): Promise<IFaturaCreateResponse> {
    const fatura = await this.faturasRepository.create(data);
    return fatura;
  }
}