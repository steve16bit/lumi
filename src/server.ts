import fastify, { type FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();

app.listen({ 
  port: 4200
 }, () => console.log("I am running!✨"))
