import type { FastifyReply, FastifyRequest } from "fastify";
import type { IFaturaCreate, IFaturaCreateResponse } from "../interfaces/fatura.interface";

export class FaturasController {
  static async create(request: FastifyRequest, reply: FastifyReply) {
    try {
      const faturaData: IFaturaCreate = request.body as IFaturaCreate;
      const createdFatura: IFaturaCreateResponse = await request.server.faturasService.create(faturaData);

      return reply.status(201).send(createdFatura);
    } catch (error) {
      reply.send(error);
    }
  }
}
