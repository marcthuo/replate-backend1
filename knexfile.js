module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/replate.db3',
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
	production: {
		client: 'pg',
		connection: {
			filename: './data/replate.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
	},
};