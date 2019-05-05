const router = require('express').Router();

const restricted = require('../../auth/middleware/restricted-middleware.js');

const Volunteer = require('./volunteerModel.js');

router.get('/', restricted, (req, res) => {
	Volunteer.find()
		.then(volunteer => {
			res.json({ volunteer, decodedToken: req.decodedJwt });
		})
		.catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
	Volunteer.findById(req.params.id)
		.then(volunteer => {
			res.json({ volunteer });
		})
		.catch(err => res.send(err));
});

router.post('/', restricted, (req, res) => {
	Volunteer.add(req.body)
		.then(newVolunteer => {
			res.json({ newVolunteer });
		})
		.catch(err => res.send(err));
});

router.put('/:id', restricted, (req, res) => {
	Volunteer.update(req.params.id, edits)
		.then(updatedVolunteer => {
			res.json({ updatedVolunteer });
		})
		.catch(err => res.send(err));
});

router.delete('/:id', restricted, async (req, res) => {
	try {
		const deletedVolunteer = await Volunteer.remove(req.params.id);
		res.status(200).json(deletedVolunteer);
	} catch (error) {
		res.status(500).json({
			message: 'Error deleting Volunteer',
		});
	}
});

module.exports = router;