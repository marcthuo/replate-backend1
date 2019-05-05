exports.up = function(knex, Promise) {
	return knex.schema.createTable('foodbank', tbl => {
		tbl.increments();

		tbl
			.string('businessName', 255)
			.notNullable();

		tbl.string('businessAddr', 255).notNullable();

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
	return knex.schema.dropTableIfExists('foodbank');
};