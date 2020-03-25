const express = require('express');

const app = express();

app.use(express.json());

/** 
 * Instalação do nodemom para nao ter que ficar reiniciando o aplicativo
 * 
 * npm install nodemom -D
 * O d serve para que a dependencia seja so executada enquanto ha o desenvolvimento
 * 
*/

/**
 * Rotas = "conjunto completo" | Recursos = "caminho"
 */

/**
 * Metodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de Parametros:
 *
 * Query Params: Parametors nomeados enviados na rota apos "?" (filtros, paginação)
 * Route params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *
 */

/**
 * Exemplo de Query params
 * Requisição http://localhost:3333/users?name=Matheus&idade=20
 *
 * const params = request.query;
 *
 * console.log(params)
 */

/**
 * Exemplo de Route params
 * Requisição http://localhost:3333/users/id
 * OBS tem que mudar a rota do get
 *
 * const params = request.params;
 *
 * console.log(params)
 */

/**
 * Exemplo de Request Body
 *  Requisição http://localhost:3333/users
 *  OBS Tem que ser um metodo post | Tem que utilizar isso app.use(express.json());
 * 
 *  const body = request.body;
 *
 * console.log(body)
 */

app.post('/users', (request, response) => {
	
	const body = request.body;

	console.log(body);

	return response.json({
		evento: 'Semana OminiStack 11.0',
		aluno: 'Tiago Barbosa',
	});
});

app.listen(3333);