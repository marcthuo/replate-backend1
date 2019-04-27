exports.up = function(knex, Promise) {
	return knex.schema.createTable('donation_details', tbl => {
		tbl.increments();

		tbl
			.integer('business_id')
			.unsigned()
			.references('id')
			.inTable('business')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		tbl
			.integer('volunteer_id')
			.unsigned()
			.references('id')
			.inTable('volunteer')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		tbl
			.integer('foodbank_id')
			.unsigned()
			.references('id')
			.inTable('foodbank')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		tbl
			.integer('donation_id')
			.unsigned()
			.references('id')
			.inTable('donations')
			.onDelete('CASCADE')
			.onUpdate('CASCADE')
			.notNullable();

		tbl.boolean('completed').notNullable();
		
		tbl.varchar('comment').notNullable();

		tbl.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('donation_details');
};
