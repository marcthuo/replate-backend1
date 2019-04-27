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
	return db('business').select('id', 'name');
}

function findBy(filter) {
	return db('business').where(filter);
}

async function add(business) {
	const [id] = await db('business').insert(business);

	return findById(id);
}

function findById(id) {
	return db('business')
		.where({ id })
		.first();
}

function findByEmail(email) {
	return db('business')
		.where({ email })
		.first();
}

function update(id, changes) {
	return db('business')
		.where({ id })
		.update(changes);
}

function remove(id) {
	return db('business')
		.where('id', id)
		.del();
}