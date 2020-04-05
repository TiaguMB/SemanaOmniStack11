// Update with your config settings.


/**
* Integração com o banco de dados
* 
* Knex = Query Builder
* 
* Instalando o Knex
*  npm install knex
* 
* Instalando o SQLite
*  npm install sqlite3
* 
* Conexão
*  npx knex init
* 
* 
* Criação do migrations
* Migrations = forma de criar tabela manter o historico
*  npx knex migrate:make create_ongs
* 
* Execução migrate
*  npx knex migrate:latest
*/

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
