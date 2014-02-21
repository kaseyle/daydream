var data = require('../data.json');

module.exports = function(req) {
	return function getData() {
		var url = req.url;
		var pathname_length = url.indexOf('?');
		var page_name = url.substring(1, pathname_length);
		var time_range = req.query.time_range;
		var word1 = req.query.word1;
		var word2 = req.query.word2;
		var word3 = req.query.word3;
		var word4 = req.query.word4;
		var words = [word1];
		if (word2.length > 0) words.push(word2); 
		if (word3.length > 0) words.push(word3); 
		if (word4.length > 0) words.push(word4);

		//get activities
		var text = word1;
		var temp = data["times"][time_range];
		var activities = temp.slice(0);
		for (var i = 0; i < words.length; i++) {
			if (i > 0) {
				text += " · " + words[i];
			}
			temp = data["tags"][words[i].toLowerCase()];
			for (var j = activities.length-1; j >= 0; j--) {
				if (temp.indexOf(activities[j]) == -1) {
					activities.splice(j,1);
				}	
			}
		}
		
		var id = data["activities_object"][page_name];
		var swipe = false;
		var back = "";
		var forward = "";

		if (activities.length > 1) {
			swipe = true;
			var index = activities.indexOf(id)
			if (index == 0) {
				forward_id = activities[index+1];
				forward = data["activities_array"][forward_id];
				back_id = activities[activities.length - 1]; 
				back = data["activities_array"][back_id];
			} else if (index == (activities.length - 1)) {
				forward_id = activities[0];
				forward = data["activities_array"][forward_id];
				back_id = activities[index-1]; 
				back = data["activities_array"][back_id];
			} else {
				forward_id = activities[index+1];
				forward = data["activities_array"][forward_id];
				back_id = activities[index-1]; 
				back = data["activities_array"][back_id];
			}
		}



		var results = {
			"word1": word1,
			"word2": word2,
			"word3": word3,
			"word4": word4,
			"words": words,
			"text": text,
			"id": id,
			"back": back,
			"forward": forward,
			"swipe": swipe,
			"time_range": time_range
		};
		return results;
		
	}
}