import 'fastify';
import { FaturasRepository } from '../repositories/faturas.repository';
import { FaturasService } from '../services/faturas.service';

declare module 'fastify' {
  interface FastifyInstance {
    faturasRepository: FaturasRepository;
    faturasService: FaturasService;
  }
}