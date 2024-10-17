import type { FastifyInstance } from "fastify";
import { FaturasController } from "../controllers/faturas.controller";

export default async function (fastify: FastifyInstance) {
  fastify.post('/faturas', FaturasController.create)
}