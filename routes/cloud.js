exports.view = function (req, res) {
	var time_range = req.query.time_range;
	res.render('cloud', {"time_range": time_range, "alt": false});
}

exports.viewAlt = function (req, res) {
	var time_range = req.query.time_range;
	res.render('cloud', {"time_range": time_range, "alt": true});
}