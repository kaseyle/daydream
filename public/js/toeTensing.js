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
	var html = "<ol>";
	html += "<li>Begin by sensing your toes.</li><br/>";
	html += "<li>Next pull all 10 toes back toward your face and count to 10 slowly.</li></br>";
	html += "<li>Now relax your toes.</li><br/>";
	html += "<li>Again, count to 10 slowly.</li></br>";
	html += "<li>Now, close your eyes, pause, and repeat.</li></ol>";
	$( "#directions" ).html(html);
	setTimeout(function() {nextPrompt(event)}, 1000);
}

function nextPrompt(event) {
	$( "#directions" ).css('visibility','visible');
}