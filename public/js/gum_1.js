$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("JQUERY INITIATED FOLKS");
	$("#gum").animate({
	width: 250, height: 250
	}, 10000);
}

