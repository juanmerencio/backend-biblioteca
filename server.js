import { fastify } from 'fastify';
import { DatabaseMYSQL } from './database-mysql.js';
import 'dotenv/config';
const { PORT } = process.env;

console.log('Variáveis de ambiente carregadas:', { PORT });

const server = fastify();

server.get('/', async (request, reply) => {
  return { message: 'API server - Bibliotca' };
});

const database = new DatabaseMYSQL();



server.post("/livros", async (request, reply) => {
    const { title, sinopse, numero_de_paginas } = request.body;
    await database.create({
        title,
        sinopse,
        numero_de_paginas
    });
    console.log(await database.list());
    return reply.status(201).send();
})

server.get("/livros", async (request) => {
    const search = request.query.search;
    console.log(search);
    const fitas = await database.list(search);
    return livros
})

server.put("/livros/:id", async (request,reply) => {

    const livrosId = request.params.id;
    const { title, sinopse, numero_de_paginas } = request.body;

    const video = await database.update(livrosId, {
        title,
        sinopse,
        numero_de_paginas,
    });

    return reply.status(204).send();
})

server.delete("/livros/:id", async (request, reply) => {
    const videoId = request.params.id;
    await database.delete(livrosId);
    return reply.status(204).send();
})

server.listen({port:PORT}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando em ${address}`);
});