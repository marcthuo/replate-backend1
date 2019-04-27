exports.seed = function(knex, Promise) {
			// Inserts seed entries
			return knex('donations').insert([
				{
					id: 1,
					name: 'mashed potatos',
					quantity_lbs: 10,
					picked_up: false,
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 2,
					name: 'canned goods',
					quantity_lbs: 30,
					picked_up: false,
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
				{
					id: 3,
					name: 'roast beef',
					quantity_lbs: 5,
					picked_up: false,
					comment: 'needs to be picked up by 12/11/2019',
					business_id: 1,
				},
			]);
};
