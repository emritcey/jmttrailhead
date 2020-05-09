module.exports = (req, res, next) => {
	let gear = {};
	if (!res.locals.data || res.locals.data === []) { return next(); }

	res.locals.data.map((item) => {
		if (!gear[item.category_name]) {
			gear[item.category_name] = [];
		}
			gear[item.category_name].push({id: item.id, name: item.item_name});
	});

	res.locals.data = gear;
	return next();
};