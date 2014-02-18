var data = {}

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
    $( "#finish" ).button().click(clickListener);
    //$( "#my_button" ).attr('disabled', 'disabled');

    $.getJSON("/data", function(json) {
    	data = json;
    });
}

function dropListener(event, ui) {
	//$( this ).find( "p" ).html( "Dropped!" );
	var word = $(ui.draggable).find("p").text();
	if (words.indexOf(word) == -1 && words.length < maxWords) {
		words.push(word);
		var activities = getActivities();
		if (activities.length == 0) {
			words.pop();
			$( "#directions ").text("Sorry! There are no daydreams for that combo.");
			$( "#directions ").css('color', 'black');
			$( "#directions ").css('font-weight', '200');
		} else {
			$(ui.draggable).draggable("option", "revert", "false");
			$( "#directions ").text("Drag in up to four words to start daydreaming...");
			$( "#directions ").css('color', 'white');
			$( "#directions ").css('font-weight', '100');
		}
	}
	console.log(words);
	if (words.length > 0) {
		//$( "#my_button" ).removeAttr('disabled');
		$("#finish").removeClass("disabled");
	}
}

function outListner(event, ui) {
	var word = $(ui.draggable).find("p").text();
	if (words.indexOf(word) > -1) {
		words.splice( words.indexOf(word), 1 );
	}
	$(ui.draggable).draggable("option", "revert", "valid");
	if (words.length == 0) {
		//$( "#my_button" ).attr('disabled', 'disabled');
		$("#finish").addClass("disabled");
	}
	$( "#directions ").text("Drag in up to four words to start daydreaming...");
	$( "#directions ").css('color', 'white');
	$( "#directions ").css('font-weight', '100');
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
	if (words.length == 0) {
		$( "#directions ").css('color', 'black');
		$( "#directions ").css('font-weight', '200');
		$( "#directions ").text("Please drag in at least one word.");
		return;
	}
	var activities = getActivities();
	var index = activities[Math.floor(Math.random() * activities.length)];
	var activity = data["activities_array"][index];
	var url = "/" + activity + "?" + "word1=" + words[0];
	for (var i = 1; i < 4; i++) {
		if (i < words.length) {
			url += "&word" + (i+1) + "=" + words[i];	
		} else {
			url += "&word" + (i+1) + "=";
		}
	}
	window.location = url;
}
