module.exports = userType => {
	return function(req, res, next) {
		if (req.body.usertype && req.body.usertype.includes(userType)) {
			next();
		} else {
			res.status(403).json('invalid usertype');
		}
	};
};