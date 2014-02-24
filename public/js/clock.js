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

			if (mouseXAdj < 0.08*boxWidth) {
				time_range = 2;
				$("#timechosen").text("1 minute");
			} else if (mouseXAdj < 0.16*boxWidth) {
				time_range = 2;
				$("#timechosen").text("2 minutes");
			} else if (mouseXAdj < 0.24*boxWidth) {
				time_range = 5;
				$("#timechosen").text("3 minutes");
			} else if (mouseXAdj < 0.28*boxWidth) {
				time_range = 5;
				$("#timechosen").text("4 minutes");
			} else if (mouseXAdj < 0.36*boxWidth) {
				time_range = 5;
				$("#timechosen").text("5 minutes"); 
			} else if (mouseXAdj < 0.40*boxWidth) {
				time_range = 10;
			 	$("#timechosen").text("7 minutes");
			} else if (mouseXAdj < 0.50*boxWidth) {
				time_range = 10;
				$("#timechosen").text("10 minutes");
			} else if (mouseXAdj < 0.58*boxWidth) {
				time_range = 15;
				$("#timechosen").text("13 minutes");
			} else if (mouseXAdj < 0.68 *boxWidth) {
				time_range = 15;
				$("#timechosen").text("15 minutes");
			} else if (mouseXAdj < 0.73*boxWidth) {
				time_range = 30;
				$("#timechosen").text("20 minutes");
			} else if (mouseXAdj < 0.78*boxWidth) {
				time_range = 30;
				$("#timechosen").text("25 minutes");
			} else if (mouseXAdj < 0.85*boxWidth) {
				time_range = 30;
				$("#timechosen").text("30 minutes");
			} else if (mouseXAdj < 0.90*boxWidth) {
				time_range = 60;
				$("#timechosen").text("40 minutes");
			} else if (mouseXAdj < 0.95*boxWidth) {
				time_range = 60;
				$("#timechosen").text("50 minutes");
			} else if (mouseXAdj < boxWidth) {
				time_range = 60;
				$("#timechosen").text("60 minutes");
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