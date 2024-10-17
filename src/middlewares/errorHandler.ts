import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {

  const statusCode = error.statusCode ? error.statusCode : 500;

  reply.status(statusCode).send({
    error: error.name,
    message: error.message || 'Internal server error',
    statusCode: statusCode
  })
}