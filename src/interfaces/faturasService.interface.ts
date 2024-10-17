import type { FaturaCreateDTO } from "../dtos/faturaCreate.dto";
import { IFaturaCreateResponse } from "./fatura.interface";

export interface IFaturaService {
  create(data: FaturaCreateDTO): Promise<IFaturaCreateResponse>;
  // getById(id: number): Promise<IFaturaResponse>;
  // getAll(): Promise<IFaturaResponse>;
  // delete(id: number): Promise<string>;
}