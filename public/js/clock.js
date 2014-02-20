'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

var time_range = 2;

function initializePage() {
	console.log("Javascript connected!");
	$("#next").click(clickListener);
	$("#timechosen").hide();
	var firstClick = true;
	$(".box").click(function(e) {
		console.log("You clicked the bar!");
		var dwidth = $(document).width();
		var cwidth = $("#container").width();
		var buffer = (dwidth-cwidth)/2;
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		var boxStart = 0.05*cwidth;
		var boxEnd = 0.95*cwidth;
		var boxWidth = .9*cwidth;
		var mouseXAdj = mouseX-(buffer+boxStart);

			if (mouseXAdj < 0.16*boxWidth) {
				time_range = 2;
				$("#timechosen").text("0-2 minutes");
			} else if (mouseXAdj < 0.32*boxWidth) {
				time_range = 5;
				$("#timechosen").text("2-5 minutes");
			} else if (mouseXAdj < 0.46*boxWidth) {
				time_range = 10;
				$("#timechosen").text("5-10 minutes"); 
			} else if (mouseXAdj < 0.65*boxWidth) {
				time_range = 15;
			 	$("#timechosen").text("10-15 minutes");
			} else if (mouseXAdj < 0.8 *boxWidth) {
				time_range = 30;
				$("#timechosen").text("15-30 minutes");
			} else if (mouseXAdj < boxWidth) {
				time_range = 60;
				$("#timechosen").text("30-60 minutes");
			}

		if (firstClick) {
			firstClick = false;
			$("#timechosen").fadeIn();
		}

		if (mouseXAdj > 0 && mouseXAdj < boxWidth) {
			$("#dragbox").animate({
				width: mouseXAdj-3
			})
		}
	});
}

function clickListener(event) {
	console.log("time range is " + time_range);
	var url = "/cloud?time_range="+time_range;
	window.location = url;
}