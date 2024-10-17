import fastify, { type FastifyInstance } from "fastify";
import { errorHandler } from "./middlewares/errorHandler";
import { FaturasRepository } from "./repositories/faturas.repository";
import { FaturasService } from "./services/faturas.service";
import faturasRoutes from "./routes/faturas.routes";

const app: FastifyInstance = fastify();

app.decorate('faturasRepository', new FaturasRepository());
app.decorate('faturasService', new FaturasService(app.faturasRepository));

app.register(faturasRoutes);

app.setErrorHandler(errorHandler);

app.setNotFoundHandler((request, reply) => {
  reply.status(404).send({ message: 'Rota não encontrada.' })
})

app.listen({ 
  port: 4200
 }, () => console.log("I am running!✨"))
