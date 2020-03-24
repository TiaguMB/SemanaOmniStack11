const express = require('express');

const app = express();

/**
 * Rotas / Recursos
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
 * Request Body: Corpo da requisição
 *
 */


app.get('/users/:id', (request, response) => {

	const params = request.params;

	console.log(params);

	return response.json({
		evento: 'Semana OminiStack 11.0',
		aluno: 'Tiago Barbosa',
	});
});

app.listen(3333);