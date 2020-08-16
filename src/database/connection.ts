import knex from 'knex'; // Query builder com js
import path from 'path'; // facilitar para trabalhar com paths

const db = knex({
    client: 'sqlite3',
    connection: {
        // __dirname informa o path de onde ele está sendo usado
        filename: path.resolve(__dirname,'database.sqlite')
    },
    useNullAsDefault: true, // Informa o que fazer na ausência de info em um campo
});

export default db;

// migratiosn controlam a versão do bd