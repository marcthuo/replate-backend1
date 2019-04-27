const router = require('express').Router();

const restricted = require('../../middleware/restricted/restrictedMiddleware');

const Foodbank = require('../foodbank/foodbankModel');

router.get('/',  (req, res) => {
	Foodbank.find()
		.then(foodbank => {
			res.json({ foodbank, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

router.put('/:id',  (req, res) => {
	Foodbank.update(req.params.id, edits)
		.then(updatedFoodbank => {
			res.json({ updatedFoodbank });
		})
		.catch(err => res.send(err));
});

router.delete('/:id',  async (req, res) => {
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
