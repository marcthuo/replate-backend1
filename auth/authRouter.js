const router = require('express').Router();
const bcrypt = require('bcryptjs');
const tokenData = require('./tokenData.js');

const Volunteer = require('../helpers/volunteer/volunteerModel.js');
const Business = require('../helpers/business/businessModel.js');
const Foodbank = require('../helpers/foodbank/foodbankModel.js');

router.post('/register', async (req, res) => {
	console.log('register')
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	switch (user.usertype) {
		case 'volunteer':
			try {
				const newVolunteer = await Volunteer.add(user);
				// const token = tokenData(newVolunteer);
				res.status(201).json({ newVolunteer });
			} catch (error) {
				res.status(500).json(error);
			}
			return;

		case 'business':
			try {
				const newBusiness = await Business.add(user);
				// const token = tokenData(newBusiness);
				res.status(201).json({ newBusiness});
			} catch (error) {
				res.status(500).json(error);
			}
			return;

		case 'foodbank':
			try {
				const newFoodbank = await Foodbank.add(user);
				// const token = tokenData(newFoodbank);
				res.status(201).json({ newFoodbank });
			} catch (error) {
				res.status(500).json(error);
			}
			return;
		default:
			return;
	}
});

router.post('/login', async (req, res) => {
	console.log('login')
	let { email, password } = req.body;

	try {
		const existingUser = await Volunteer.findByEmail(email);
		if (existingUser && bcrypt.compareSync(password, existingUser.password)) {
			const token = tokenData(existingUser);
			res.status(200).json({
				message: `Welcome ${existingUser.first_name}!`,
				token,
			});
		} else {
			try {
				const existingBusiness = await Business.findByEmail(email);
				if (
					existingBusiness &&
					bcrypt.compareSync(password, existingBusiness.password)
				) {
					const token = tokenData(existingBusiness);
					res.status(200).json({
						message: `Welcome ${existingBusiness.businessName}!`,
						token,
					});
				} else {
					try {
						const existingFoodbank = await Foodbank.findByEmail(email);
						if (
							existingFoodbank &&
							bcrypt.compareSync(password, existingFoodbank.password)
						) {
							const token = tokenData(existingFoodbank);
							res.status(200).json({
								message: `Welcome ${existingFoodbank.businessName}!`,
								token,
							});
						} else {
							res.status(401).json({ message: 'Invalid Credentials' });
						}
					} catch (error) {
						res.status(500).json(error);
					}
				}
			} catch (error) {
				res.status(500).json(error);
			}
		}
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

module.exports = router;