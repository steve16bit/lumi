import type { FaturaCreateDTO } from "../dtos/faturaCreate.dto";
import { IFaturaCreate, IFaturaResponse, type IFaturaCreateResponse } from "./fatura.interface";

export interface IFaturaRepository {
  create(data: FaturaCreateDTO): Promise<IFaturaCreateResponse>;
  // getById(id: number): Promise<IFaturaResponse>;
  // getAll(): Promise<IFaturaResponse[]>;
  // delete(id: number): Promise<string>;
}