exports.up = function(knex, Promise) {
	return knex.schema.createTable('donations', table => {
		table.increments();

		table
			.string('name')
			.notNullable()
			.unique();

		table.integer('quantity_lbs').notNullable();
		table.varchar('comment').notNullable();
		table.boolean('picked_up').notNullable();

		table
			.integer('business_id')
			.unsigned()
			.references('id')
			.inTable('business')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('donations');
};

