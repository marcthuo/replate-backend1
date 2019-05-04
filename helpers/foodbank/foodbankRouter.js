const router = require('express').Router();

const restricted = require('../../auth/middleware/restricted-middleware.js');

const Foodbank = require('./foodbankModel.js');

router.get('/', restricted, (req, res) => {
	Foodbank.find()
		.then(foodbank => {
			res.json({ foodbank, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
	Foodbank.findById(req.params.id)
		.then(foodbank => {
			res.json({ foodbank });
		})
		.catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
	Foodbank.add(req.body)
		.then(newFoodbank => {
			res.json({ newFoodbank });
		})
		.catch(err => res.send(err));
});

router.put('/:id', restricted, (req, res) => {
	Foodbank.update(req.params.id, edits)
		.then(updatedFoodbank => {
			res.json({ updatedFoodbank });
		})
		.catch(err => res.send(err));
});

router.delete('/:id', restricted, async (req, res) => {
	try {
		const deletedFoodbank = await Foodbank.remove(req.params.id);
		res.status(200).json(deletedFoodbank);
	} catch (error) {
		res.status(500).json({
			message: 'Error deleting Foodbank',
		});
	}
});

module.exports = router;
