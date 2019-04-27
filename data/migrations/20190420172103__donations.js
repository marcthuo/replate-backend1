exports.up = function(knex, Promise) {
	return knex.schema.createTable('donations', tbl => {
		tbl.increments();

		tbl
			.string('name')
			.notNullable()
			.unique();

		tbl.integer('quantity_lbs').notNullable();

		tbl.varchar('comment').notNullable();

		tbl.boolean('picked_up').notNullable();

		tbl
			.integer('business_id')
			.unsigned()
			.references('id')
			.inTable('business')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('donations');
};

