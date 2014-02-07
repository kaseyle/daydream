'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
//function initializePage() {
//	console.log("Javascript connected!");
//	$("#dragbox").click(function(e) {
//		console.log("You clicked the bar...");
//		//here's what happens
//		e.preventDefault();
//		var mouseX = e.pageX;
///		var mouseY = e.pageY;
	//	$("this").color(black);
//	}
//}
function initializePage() {
	console.log("Javascript connected!");
	$("#timechosen").hide();
	var firstClick = true;
	$(document).click(function(e) {
		console.log("You clicked the bar!");
		e.preventDefault();
		var mouseX = e.pageX;
		var mouseY = e.pageY;

		if (mouseY > 435 && mouseY < 530) {
			if (mouseX < 428) $("#timechosen").text("0-2 minutes");
			else if (mouseX < 550) $("#timechosen").text("2-5 minutes");
			else if (mouseX < 680) $("#timechosen").text("5-10 minutes");
			else if (mouseX < 810) $("#timechosen").text("10-15 minutes");
			else if (mouseX < 945) $("#timechosen").text("15-30 minutes");
			else if (mouseX < 1066) $("#timechosen").text("30-60 minutes");
		}

		if (firstClick) {
			firstClick = false;
			$("#timechosen").fadeIn();
		}
		if (mouseY > 435 && mouseY < 530 && mouseX < 1066) {
			$("#dragbox").animate({
				width: mouseX-270
			})
		}
	});
}