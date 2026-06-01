import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabaseMYSQL {


    async list(search) {
        let Livros;

        if (search) {
            
            [Livros] = await sql.execute(
                'SELECT * FROM fitas WHERE title LIKE ?', 
                [`%${search}%`]
            );
        } else {
            [Livros] = await sql.execute('SELECT * FROM livros');
        }

        return Livros;
    }


    async create(Fitas) {
        const fitaId = randomUUID();
        const { title, sinopse, numero_de_paginas } = Livros;

        
        await sql.execute(
            'INSERT INTO fitas (id, title, sinopse, numero_de_paginas) VALUES (?, ?, ?, ?)',
            [livroId, title, sinopse, numero_de_paginas]
        );
    }


    async update(id, Fitas) {
        const { title, sinopse, numero_de_paginas } = Livros;
        await sql.execute(
            'UPDATE livros SET title = ?, sinopse = ?, numero_de_paginas = ? WHERE id = ?',
            [title, sinopse, numero_de_paginas, id]
        );
    }


    async delete(id) {
        await sql.execute('DELETE FROM livros WHERE id = ?', [id]);
    }
}

