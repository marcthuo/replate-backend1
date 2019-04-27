exports.up = function(knex, Promise) {
	return knex.schema.createTable('foodbank', table => {
		table.increments();

		table
			.string('businessName', 255)
			.notNullable()
			.unique();

		table.string('businessAddr', 255).notNullable();
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
	return knex.schema.dropTableIfExists('foodbank');
};