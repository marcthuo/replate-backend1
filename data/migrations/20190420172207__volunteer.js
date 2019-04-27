exports.up = function(knex, Promise) {
	return knex.schema.createTable('volunteer', tbl => {
		tbl.increments();

		tbl.string('first_name', 255).notNullable();

		tbl.string('last_name', 255).notNullable();

		tbl.string('address', 255).notNullable();

		tbl.integer('phone', 255).notNullable();

		tbl
			.string('email', 255)
			.notNullable()
			.unique();

		tbl.string('password', 255).notNullable();

		tbl.string('usertype', 255).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('volunteer');
};
