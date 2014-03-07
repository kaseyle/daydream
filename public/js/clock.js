'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

var time_range = 2;

function initializePage() {
	console.log("Javascript connected!");
	var firstClick = true;
	$("#timechosen").hide();

	$( ".draggable" ).draggable({containment: "parent"});
	$( "#slider").slider({
		range: "min", 
		value: 7,
		min: 0,
		max: 60,
		slide: function(event, ui) {
			if (firstClick) {
				firstClick = false;
				$("#timechosen").fadeIn();
			}
			var timevalue = $("#slider").slider("value");
			$("#time").text(timevalue + " minutes");
			if(timevalue<3) {
				time_range = 2;
			}else if (timevalue < 6) {
				time_range = 5;
			}else if (timevalue < 11) {
				time_range = 10;
			}else if (timevalue < 16) {
				time_range = 15;
			}else if (timevalue < 31) {
				time_range = 30;
			}else time_range = 60;
		}
	});	


	$("#next").click(clickListener);
	$(".box").click(function(e) {
		console.log("You clicked the bar!");
	});
}

function clickListener(event) {
	console.log("time range is " + time_range);
	var url = "/cloud?time_range="+time_range;
	window.location = url;
}