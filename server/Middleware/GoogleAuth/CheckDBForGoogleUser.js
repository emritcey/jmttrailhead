module.exports = (req, res, next) => {
	const findUserQuery = "SELECT * FROM users WHERE google_id='" + req.user.id + "';";

	res.locals.client.query(findUserQuery, (err, data) => {
		if (err) {
			res.locals.error = err;
			return next();
		}
		if (data && data.rows.length > 0) {
			res.locals.user = data.rows[0];
		} else {
			res.locals.newUser = req.user;
		}
		return next();
	});
};
