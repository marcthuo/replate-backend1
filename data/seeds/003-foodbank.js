exports.seed = function(knex, Promise) {
	// Inserts seed entries
	return knex('foodbank').insert([
	{	
		id: 1,
		businessName: 'VFW',
		businessAddr: '3 west oaks ln, miami fl, 34322',
		phone: 4442222223,
		email: 'support@vfw.com',
		password: 'pass',
		usertype: 'foodbank',
	},
	{
		id: 2,
		businessName: 'Salvation army',
		businessAddr: '3333 terry ave, miami fl, 34322',
		phone: 5555555555,
		email: 'support@salvation.com',
		password: 'pass',
		usertype: 'foodbank',
	},
	]);
};
