const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const configureMiddleware = require('../middleware/middleware');
const authRouter = require('../middleware/auth/authRouter');

const businessRouter = require('../helpers/business/businessRouter');
const donationsRouter = require('../helpers/donations/donationsRouter');
const volunteerRouter = require('../helpers/volunteers/volunteerRouter');
const foodbankRouter = require('../helpers/foodbank/foodbankRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/business', businessRouter);
server.use('/api/donations', donationsRouter);
server.use('/api/foodbank', foodbankRouter);
server.use('/api/volunteers', volunteerRouter);

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running' });
});

module.exports = server;
