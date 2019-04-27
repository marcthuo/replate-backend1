exports.seed = function(knex, Promise) {
			// Inserts seed entries
			return knex('business').insert([
				{
					id: 1,
					businessName: 'Publix',
					phone: 4444444444,
					businessAddr: '1 main st, miami fl, 32321',
					email: 'support@publix.com',
					password: 'pass',
					usertype: 'business',
				},
				{
					id: 2,
					businessName: 'CVS',
					phone: 2222222222,
					businessAddr: '13 main st, miami fl, 32321',
					email: 'support@cvs.com',
					password: 'pass',
					usertype: 'business',
				},
			]);
};
