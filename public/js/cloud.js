var data = {}

var words = new Array();
var maxWords = 4;
var maxActivities = 4;

var time_range = $("#time_range").text();

var alt = false;
if ($("#alt").text() == "true") {
	alt = true;
}

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

    if (alt) {
	    $(".word").on('touchstart', function(){
	        $("#directions").slideUp(500);
	    });

	    $(".word").on('mousedown', function(){
	        $("#directions").slideUp(500);
	    });
	
    	$("#directions").slideUp(0);
		$("#directions").slideDown(1000);
	}

    $("#question").click( function() {
    	ga("send", "event", "help", "click");
    	alert("Drag up to four words into the cloud and click 'Finish' to select an activity. Some words may fly out of the cloud if there are no activities for that combination of words.");
    });
}

function dropListener(event, ui) {
	var word = $(ui.draggable).find("p").text();
	if (words.indexOf(word) == -1) {
		if (words.length >= maxWords) {
			ga("send", "event", "error", "max-limit");
			$( "#directions ").text("Sorry! You can have at most four words.");
			if (alt) {
				$("#directions").slideDown(500);
				//setTimeout( function() {$("#directions").slideUp(1000);}, 3000 );
			} else {
				$( "#directions ").css('color', 'black');
			}
		} else {
			words.push(word);
			var activities = getActivities();
			if (activities.length == 0) {
				words.pop();
				ga("send", "event", "error", "no-activities");
				$( "#directions ").text("Sorry! No daydreams for that combination.");
				if (alt) {
					$("#directions").slideDown(500);
	    			//setTimeout( function() {$("#directions").slideUp(1000);}, 3000 );
				} else {
					$( "#directions ").css('color', 'black');
				}
			} else {
				$(ui.draggable).draggable("option", "revert", "false");
				if (!alt) {
					$( "#directions ").text("Drag a few words into the cloud to start.");
					$( "#directions ").css('color', 'white');
				}
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
		$("#finish").addClass("disabled");
	}
}

function getActivities() {
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
		ga("send", "event", "error", "min-limit");
		$( "#directions ").text("Please drag in at least one word.");
		if (alt) {
			$("#directions").slideDown(500);
			//setTimeout( function() {$("#directions").slideUp(1000);}, 3000 );
		} else {
			$( "#directions ").css('color', 'black');
		}
		return;
	}
	var activities = getActivities();
	var rand = Math.random();
	console.log(rand);
	var index = Math.floor(rand * activities.length);
	var activity_id = activities[index];
	var activity = data["activities_array"][activity_id];
	var url = "/" + activity + "?" + "time_range=" + time_range;
	for (var i = 0; i < 4; i++) {
		if (i < words.length) {
			url += "&word" + (i+1) + "=" + words[i];	
		} else {
			url += "&word" + (i+1) + "=";
		}
	}
	for (var i = 0; i < 4; i++) {
		if (i < activities.length) {
			if (index+i >= activities.length) {
				url += "&act" + (i+1) + "=" + data["activities_array"][activities[index+i-activities.length]];	
			} else {
				url += "&act" + (i+1) + "=" + data["activities_array"][activities[index+i]];	
			}
		} else {
			url += "&act" + (i+1) + "=";
		}
	}
	url += "&first=1";
	window.location = url;
}
