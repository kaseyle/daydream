exports.view = function (req, res) {
	data = require('./basic')(req)();
	res.render('powerstance', data);
}
