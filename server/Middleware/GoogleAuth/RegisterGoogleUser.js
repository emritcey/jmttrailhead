module.exports = (req, res, next) => {
	if (res.locals.newUser) {
		const googleId = res.locals.newUser.id;
		const name = res.locals.newUser.displayName || "";
		const email = res.locals.newUser.emails[0].value || "";

		if (!googleId) {
			res.locals.error = 'NO GOOGLE ID FOUND';
			return next();
		}

		const createUserQuery = "INSERT INTO users (id, google_id, name, email) VALUES (default, '"
			+ googleId + "', '"
			+ name + "', '"
			+ email + "');";

		res.locals.client.query(createUserQuery, (err, data) => {
			res.locals.error = err;
			res.locals.user = {
				google_id: googleId,
				name: name,
				email: email
			};
			return next();
		});
	} else {
			return next();
	}
};
