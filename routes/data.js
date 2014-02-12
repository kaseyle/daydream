var data = require('../data.json');

exports.getJson = function(req, res) {
	res.json(data);
}