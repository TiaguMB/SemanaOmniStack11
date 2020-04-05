const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();console.log(response.body);
	});
	
	it('shold be able to create a new ONG', async () => {
		const response = await request(app)
			.post('/ongs')
			.send({
				name: "teste",
				email: "contato@ong.com",
				whatsapp: "1100000000",
				city: "TESTE",
				uf: "TT"
			});

		expect(response.body).toHaveProperty('id');
		expect(response.body.id).toHaveLength(8);
	});
});