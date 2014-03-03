var data = require('../data.json');

module.exports = function(req) {
	return function getData() {
		var url = req.url;
		var pathname_length = url.indexOf('?');
		var page_name = url.substring(1, pathname_length);
		var parameters = url.substring(pathname_length, url.length-1);
		var time_range = req.query.time_range;

		var word1 = req.query.word1;
		var word2 = req.query.word2;
		var word3 = req.query.word3;
		var word4 = req.query.word4;
		var words = [word1];
		if (word2.length > 0) words.push(word2); 
		if (word3.length > 0) words.push(word3); 
		if (word4.length > 0) words.push(word4);

		var act1 = req.query.act1;
		var act2 = req.query.act2;
		var act3 = req.query.act3;
		var act4 = req.query.act4;
		var activities = [act1];
		if (act2.length > 0) activities.push(act2); 
		if (act3.length > 0) activities.push(act3); 
		if (act4.length > 0) activities.push(act4);

		//get activities
		var text = word1;
		/*
		var temp = data["times"][time_range];
		var activities = temp.slice(0);

		var date = new Date();
		var current_hour = date.getHours();
		var time;
		if (current_hour < 18 && current_hour > 6) {
			time = data["day"];
		} else {
			time = data["night"];
		}

		time = data["day"];

		for (var j = activities.length-1; j >= 0; j--) {
			if (time.indexOf(activities[j]) == -1) {
				activities.splice(j,1);
			}	
		}
		*/

		for (var i = 0; i < words.length; i++) {
			if (i > 0) {
				text += " · " + words[i];
			}
			/*
			temp = data["tags"][words[i].toLowerCase()];
			for (var j = activities.length-1; j >= 0; j--) {
				if (temp.indexOf(activities[j]) == -1) {
					activities.splice(j,1);
				}	
			}
			*/
		}
		
		//var id = data["activities_object"][page_name];
		var swipe = false;
		var back = "";
		var forward = "";

		if (activities.length > 1) {
			swipe = true;
			var index = activities.indexOf(page_name);
			var forward_page_name;
			var back_page_name;
			if (index == 0) {
				forward_page_name = activities[index+1];
				back_page_name = activities[activities.length - 1]; 
			} else if (index == (activities.length - 1)) {
				forward_page_name = activities[0];
				back_page_name = activities[index-1]; 
			} else {
				forward_page_name = activities[index+1];
				back_page_name = activities[index-1]; 
			}
			forward = "/" + forward_page_name + parameters + "0";
			back = "/" + back_page_name + parameters + "0";
		}

		var first = true;
		if (req.query.first == 0) {
			first = false;
		}

		links = [];
		var index = activities.indexOf(page_name)
		for (var i = 0; i < activities.length; i++) {
			var link = "/" + activities[i] + parameters + "0";
			//link += "?time_range=" + time_range;
			//link += "&word1=" + word1 + "&word2=" + word2 + "&word3=" + word3 + "&word4=" + word4; 
			var bool = false;
			if (index == i) bool = true;
			links.push({
				"link": link,
				"bool": bool
			})
		}

		var margin = 155 - 20 - 16*(activities.length - 1);

		var results = {
			//"word1": word1,
			//"word2": word2,
			//"word3": word3,
			//"word4": word4,
			//"words": words,
			"text": text,
			//"id": id,
			"back": back,
			"forward": forward,
			"swipe": swipe,
			"time_range": time_range,
			"links": links,
			"margin": margin,
			"first": first
		};
		return results;
		
	}
}