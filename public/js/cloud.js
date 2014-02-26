var data = {}

var words = new Array();
var maxWords = 4;

var time_range = $("#time_range").text();

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("time_range is " +time_range);

	$( ".draggable" ).draggable();
	$( ".draggable" ).draggable("option", "revert", "valid");
    $( ".droppable" ).droppable({
      drop: dropListener,
      out: outListner     
    });
    $( "#finish" ).button().click(clickListener);

    $.getJSON("/data", function(json) {
    	data = json;
    });

    $(".word").on('touchstart', function(){
        // When user touches the slider handle, temporarily unbind the page turn handlers
        $("#directions").slideUp(0);
    });

    $(".word").on('mousedown', function(){
        // When user touches the slider handle, temporarily unbind the page turn handlers
        $("#directions").slideUp(0);
    });

    $("#directions").slideUp(0);
	$("#directions").slideDown(1000);
    setTimeout( function() {$("#directions").slideUp(1000);}, 2500 );
}

function dropListener(event, ui) {
	var word = $(ui.draggable).find("p").text();
	if (words.indexOf(word) == -1) {
		if (words.length >= maxWords) {
			$( "#directions ").text("Sorry! There are too many words.");
			$("#directions").slideDown(500);
			setTimeout( function() {$("#directions").slideUp(1000);}, 3000 );
		} else {
			words.push(word);
			var activities = getActivities();
			if (activities.length == 0) {
				words.pop();
				//$("#directions").slideUp(0);
				$( "#directions ").text("Sorry! No daydreams for that combination.");
				$("#directions").slideDown(500);
	    		setTimeout( function() {$("#directions").slideUp(1000);}, 3000 );
			} else {
				$(ui.draggable).draggable("option", "revert", "false");
			}
		}
	}
	console.log(words);
	if (words.length > 0) {
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
}

function getActivities() {
	var temp = data["times"][time_range];
	var activities = temp.slice(0);

	var date = new Date();
	var current_hour = date.getHours();
	var time;
	if (current_hour < 18) {
		time = data["day"];
	} else {
		time = data["night"];
	}

	for (var j = activities.length-1; j >= 0; j--) {
		if (time.indexOf(activities[j]) == -1) {
			activities.splice(j,1);
		}	
	}

	for (var i = 0; i < words.length; i++) {
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
		$( "#directions ").text("Please drag in at least one word.");
		$("#directions").slideDown(500);
		setTimeout( function() {$("#directions").slideUp(1000);}, 3000 );
		return;
	}
	var activities = getActivities();
	var rand = Math.random();
	console.log(rand);
	var index = activities[Math.floor(rand * activities.length)];
	var activity = data["activities_array"][index];
	var url = "/" + activity + "?" + "time_range=" + time_range;
	for (var i = 0; i < 4; i++) {
		if (i < words.length) {
			url += "&word" + (i+1) + "=" + words[i];	
		} else {
			url += "&word" + (i+1) + "=";
		}
	}
	url += "&first=1";
	window.location = url;
}
