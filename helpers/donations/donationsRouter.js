const router = require('express').Router();

const restricted = require('../../auth/middleware/restricted-middleware.js');

const Donations = require('./donationsModel');
// const DonationDetails = require('../');


router.get('/', restricted, (req, res) => {
	Donations.find()
		.then(donation => {
			res.json({ donation });
		})
		.catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
	Donations.findById(req.params.id)
		.then(donation => {
			res.json({ donation });
		})
		.catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
	Donations.add(req.body)
		.then(newDonations => {
			res.json({ newDonations });
		})
		.catch(err => res.send(err));
});

router.put('/:id', restricted, (req, res) => {
	Donations.update(req.params.id, edits)
		.then(updatedDonations => {
			res.json({ updatedDonations });
		})
		.catch(err => res.send(err));
});

router.delete('/:id', restricted, async (req, res) => {
	try {
		const deletedDonations = await Donations.remove(req.params.id);
		res.status(200).json(deletedDonations);
	} catch (error) {
		res.status(500).json({
			message: 'Error deleting Donations',
		});
	}
});

module.exports = router;