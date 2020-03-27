
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
	  table.string('id').primary();
	  table.string('name').notNullable();
	  table.string('email').notNullable();
	  table.string('whatasapp').notNullable();
	  table.string('city').notNullable();
	  table.string('uf', 2).notNullable();
	});
};

exports.down = function(knex) {
  return knes.schema.dropTable('ongs');
};
