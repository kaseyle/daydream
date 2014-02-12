'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$("#timechosen").hide();
	var firstClick = true;
	$("#container").click(function(e) {
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

			if (mouseXAdj < 0.16*boxWidth) $("#timechosen").text("0-2 minutes");
			else if (mouseXAdj < 0.32*boxWidth) $("#timechosen").text("2-5 minutes");
			else if (mouseXAdj < 0.40*boxWidth) $("#timechosen").text("5-10 minutes");
			else if (mouseXAdj < 0.70*boxWidth) $("#timechosen").text("10-15 minutes");
			else if (mouseXAdj < 0.86*boxWidth) $("#timechosen").text("15-30 minutes");
			else if (mouseXAdj < boxWidth) $("#timechosen").text("30-60 minutes");

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