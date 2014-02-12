module.exports = function(req) {
	return function getData() {
		var word1 = req.query.word1;
		var word2 = req.query.word2;
		var word3 = req.query.word3;
		var word4 = req.query.word4;
		var words = [word1];
		if (word2.length > 0) words.push(word2); 
		if (word3.length > 0) words.push(word3); 
		if (word4.length > 0) words.push(word4);
		var text = word1;
		for (var i = 1; i < words.length; i++) {
			text += " · " + words[i];
		}
		var data = {
			"words": words,
			"text": text
		};
		return data;
	}
}