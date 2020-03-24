const express = require('express');

const app = express();

app.get('/', (request, response) => {
	return response.json({
		evento: 'Semana OminiStack 11.0',
		aluno: 'Tiago Barbosa'
	});
});

app.listen(3333);