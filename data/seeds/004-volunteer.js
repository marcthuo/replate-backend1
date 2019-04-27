exports.seed = function(knex, Promise) {
			// Inserts seed entries
			return knex('volunteer').insert([
				{
					id: 1,
					first_name: 'Randy',
					last_name: 'Wilson',
					address: '123 palm ave, sarasota fl, 33945',
					phone: 9412223333,
					email: 'randy@google.com',
					password: 'pass',
					usertype: 'volunteer',
				},
				{
					id: 2,
					first_name: 'Joe',
					last_name: 'Carry',
					address: '112 orange ave, miami fl, 33923',
					phone: 9412223333,
					email: 'joe@google.com',
					password: 'pass',
					usertype: 'volunteer',
				},
			]);
};
