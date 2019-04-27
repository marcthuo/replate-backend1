exports.seed = function(knex, Promise) {
	// Inserts seed entries
	return knex('donation_details').insert([
	{
		id: 1,
		business_id: 1,
		volunteer_id: 1,
		foodbank_id: 1,
		donation_id: 1,
		completed: true,
		comment: 'dropped off to Mr. Wilson',
	},
	{
		id: 2,
		business_id: 1,
		volunteer_id: 2,
		foodbank_id: 2,
		donation_id: 3,
		completed: false,
		comment: 'was closed at time of arrival.',
	},
	]);
};
