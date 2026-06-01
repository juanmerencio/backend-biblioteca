import { sql } from "./db.js"; //


const createTableQuery = `
CREATE TABLE IF NOT EXISTS livro (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    sinopse TEXT,
    numero_de_paginas INT
);
`;
sql.query(createTableQuery)
    .then(() => {
        console.log("Tabela 'Livros' criada ou já existente com sucesso no MySQL");
    })
    .catch((err) => {
        console.error("Erro ao criar a tabela no MySQL:");
        console.error(err.message);
    });
