const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findByEmail,
	findById,
	remove,
	update,
};

// const users = db('donation_details as d')
// 	.join('volunteer as v', 'volunteer_id', '=', 'v.id')
// 	.select('v.first_name', 'v.last_name');

function find() {
	return db('volunteer').select('id', 'first_name');
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

function findByEmail(email) {
	return db('volunteer')
		.where({ email })
		.first();
}

function findById(id) {
	return db('volunteer')
		.where({ id })
		.first();
}

async function add(volunteer) {
	const [id] = await db('volunteer').insert(volunteer);

	return findById(id);
}