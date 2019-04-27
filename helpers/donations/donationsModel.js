const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	update,
};

function find() {
	return db('donations').select('id', 'name');
}
// function findByUser(id) {
// 	const donations = db('donation_details as d')
// 		.join('volunteer as v', 'volunteer_id', '=', 'v.id')
// 		.select('v.first_name', 'v.last_name')
// 		.where('d.volunteer_id', { id });

// 	console.log(donations);
// 	return donations;
// }

function findBy(filter) {
	return db('donations').where(filter);
}

async function add(donations) {
	const [id] = await db('donations').insert(donations);

	return findById(id);
}

function findById(id) {
	return db('donations')
		.where({ id })
		.first();
}

function remove(id) {
	return db('volunteer')
		.where('id', id)
		.del();
}
function update(id, changes) {
	return db('volunteer')
		.where({ id })
		.update(changes);
}