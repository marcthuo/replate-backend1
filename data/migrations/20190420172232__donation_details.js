exports.up = function(knex, Promise) {
	return knex.schema.createTable('donation_details', table => {
		table.increments();

		table
			.integer('business_id')
			.unsigned()
			.references('id')
			.inTable('business')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		table
			.integer('volunteer_id')
			.unsigned()
			.references('id')
			.inTable('volunteer')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		table
			.integer('foodbank_id')
			.unsigned()
			.references('id')
			.inTable('foodbank')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		table
			.integer('donation_id')
			.unsigned()
			.references('id')
			.inTable('donations')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		table.boolean('completed').notNullable();
		table.varchar('comment').notNullable();

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('donation_details');
};
