const db = require('../../data/dbConfig');

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	update,
	findByEmail,
};

function find() {
	return db('foodbank').select('id', 'name');
}

function findBy(filter) {
	return db('foodbank').where(filter);
}

async function add(foodbank) {
	const [id] = await db('foodbank').insert(foodbank);

	return findById(id);
}

function findById(id) {
	return db('foodbank')
		.where({ id })
		.first();
}

function findByEmail(email) {
	return db('foodbank')
		.where({ email })
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