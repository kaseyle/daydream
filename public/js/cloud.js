var data = {
	"tags": {
		"alone": [0,1],
		"friends": [0,1],
		"inside": [0,1],
		"outside": [0,1],
		"active": [0,1],
		"quiet": [0,1],
		"tactile": [0,1],
		"explore": [0,1],
		"reflect": [0,1],
		"think": [0,1],
		"learn": [0,1],
		"blank": [],
	},
	"times": {
		"2": [0],
		"5": [0],
		"10": [0],
		"15": [0],
		"30": [0],
		"60": [0]
	},
	"activities_array": ["yoga", "cloudGazing"],
	"activities_object": {"yoga": 0, "cloudGazing": 1}
}

var words = new Array();
var maxWords = 4;

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$( ".draggable" ).draggable();
	$( ".draggable" ).draggable("option", "revert", "valid");
    $( ".droppable" ).droppable({
      drop: dropListener,
      out: outListner     
    });
    $( "#my_button" ).button().click(clickListener);
    $( "#my_button" ).attr('disabled', 'disabled');

    /*Handlebars.registerHelper("each_with_index", function(array, fn) {
		var buffer = "";
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
	 
			// stick an index property onto the item, starting with 1, may make configurable later
			item.index = i+1;
	 
			// show the inside of the block
			buffer += fn(item);
		}
	 
		// return the finished buffer
		return buffer;
	});*/
}

function dropListener(event, ui) {
	//$( this ).find( "p" ).html( "Dropped!" );
	var word = $(ui.draggable).find("p").text();
	if (words.indexOf(word) == -1 && words.length < maxWords) {
		words.push(word);
		var activities = getActivities();
		if (activities.length == 0) {
			words.pop();
			$( "#directions ").text("Sorry! There are no daydreams for that combination.");
			$( "#directions ").css('color', 'black');
		} else {
			$(ui.draggable).draggable("option", "revert", "false");
			$( "#directions ").text("Drag in up to four words to start daydreaming...");
			$( "#directions ").css('color', 'white');
		}
	}
	console.log(words);
	if (words.length > 0) {
		$( "#my_button" ).removeAttr('disabled');
	}
}

function outListner(event, ui) {
	var word = $(ui.draggable).find("p").text();
	if (words.indexOf(word) > -1) {
		words.splice( words.indexOf(word), 1 );
	}
	$(ui.draggable).draggable("option", "revert", "valid");
	if (words.length == 0) {
		$( "#my_button" ).attr('disabled', 'disabled');
	}
}

function getActivities() {
	var temp = data["tags"][words[0].toLowerCase()]
	var activities = temp.slice(0);
	for (var i = 1; i < words.length; i++) {
		temp = data["tags"][words[i].toLowerCase()];
		for (var j = activities.length-1; j >= 0; j--) {
			if (temp.indexOf(activities[j]) == -1) {
				activities.splice(j,1);
			}	
		}
	}
	console.log(activities);
	return activities;
}

function clickListener(event) {
	event.preventDefault();
	var activities = getActivities();
	var index = activities[Math.floor(Math.random() * activities.length)];
	var activity = data["activities_array"][index];
	var url = "/" + activity + "?" + "word1=" + words[0];
	for (var i = 1; i < words.length; i++) {
		url += "&word" + (i+1) + "=" + words[i];
	}
	window.location = url;
}
