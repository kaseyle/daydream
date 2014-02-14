$(document).ready(function() {
	initializePage();
})

function initializePage() {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $( "#swipe" ).on( "swipe", swipeHandler );
   
    // Callback function references the event target and adds the 'swipe' class to it
    function swipeHandler( event ){
    	event.preventDefault();
    	swipe(event);
    }
}

function swipe(event) {
	$( event.target ).hide();
	$( "#directions" ).css('visibility','hidden');
	$( "#directions" ).addClass("swipe");
	var html = "<ul>";
	html += "<li>Imagine yourself in a favorite, peaceful place. Perhaps lying out on a beach or in a hammock in your backyard.</li><br/>";
	html += "<li>Imagine you are there. See and feel your surroundings, hear the peaceful sounds, smell the flowers or the barbecue, fell the warmth of the sun and any other sensations that you find.</li></br>";
	html += "<li>You can return to this place any time you need to. As you use this place more and more you will find it easier relax.</li><br/>";
	html += "<li>Now, close your eyes and enjoy.</li></ul>";
	$( "#directions" ).html(html);
	setTimeout(function() {nextPrompt(event)}, 1000);
}

function nextPrompt(event) {
	$( "#directions" ).css('visibility','visible');
}