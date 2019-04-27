exports.up = function(knex, Promise) {
	return knex.schema.createTable('volunteer', table => {
		table.increments();

		table.string('first_name', 255).notNullable();
		table.string('last_name', 255).notNullable();

		table.string('address', 255).notNullable();
		table.integer('phone', 255).notNullable();
		table
			.string('email', 255)
			.notNullable()
			.unique();
		table.string('password', 255).notNullable();
		table.string('usertype', 255).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('volunteer');
};
