const router = require('express').Router();

const Business = require('./businessModel');
const restricted = require('../../auth/middleware/restricted-middleware.js');
// const checkType = require('../../auth/middleware/checkType-middleware.js');

router.get('/', restricted, (req, res) => {
	Business.find()
		.then(business => {
			res.json({ business, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
	Business.findById(req.params.id)
		.then(business => {
			res.json({ business });
		})
		.catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
	Business.add(req.body)
		.then(business => {
			res.json({ business });
		})
		.catch(err => res.send(err));
});

// router.get('/:id/donations', restricted, (req, res) => {
// 	Business.findById(req.params.id)
// 		.then(business => {
// 			res.json({ business });
// 		})
// 		.catch(err => res.send(err));
// });

router.put('/:id', restricted, (req, res) => {
	Business.update(req.params.id, edits)
		.then(updatedBusiness => {
			res.json({ updatedBusiness });
		})
		.catch(err => res.send(err));
});

router.delete('/:id', restricted, async (req, res) => {
	try {
		const deletedBusiness = await Business.remove(req.params.id);
		res.status(200).json(deletedBusiness);
	} catch (error) {
		res.status(500).json({
			message: 'Error deleting business',
		});
	}
});

module.exports = router;