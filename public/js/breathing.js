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
	html += "<li>Begin to inhale slowly through your nose.</li><br/>";
	html += "<li>Over 8-10 seconds, fill the lower part of your chest, then the middle and top parts.</li></br>";
	html += "<li>Hold your breath for a second or two.</li><br/>";
	html += "<li>Then relax and quietly let the air out.</li></br>";
	html += "<li>Now, close your eyes, pause, and repeat.</li></ol>";
	$( "#directions" ).html(html);
	setTimeout(function() {nextPrompt(event)}, 1000);
}

function nextPrompt(event) {
	$( "#directions" ).css('visibility','visible');
}