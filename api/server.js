const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/authRouter.js');

const businessRouter = require('../helpers/business/businessRouter.js');
const donationsRouter = require('../helpers/donations/donationsRouter.js');
const volunteerRouter = require('../helpers/volunteer/volunteerRouter.js');
const foodbankRouter = require('../helpers/foodbank/foodbankRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use('/api/business', businessRouter);
server.use('/api/donations', donationsRouter);
server.use('/api/foodbank', foodbankRouter);
server.use('/api/volunteers', volunteerRouter);

server.get('/', async (req, res) => {
	res.status(200).json({ api: 'running replate' });
});

module.exports = server;
