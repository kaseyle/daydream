var prompts = [
	"Call someone you haven't talked to in a while.",
	"Call an old friend from highschool.",
	"Call a relative that you don't usually talk to.",
	"Call someone that reminds you of your childhood.",
	

var index = 1;

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
	console.log("SWIPE");
	$( event.target ).addClass( "swipe" );
	$( "#directions" ).css('visibility','hidden');
	setTimeout(function() {nextPrompt(event)}, 2000);
}

function nextPrompt(event) {
	$( "#directions" ).text(prompts[index]);
	$( "#directions" ).css('visibility','visible');
	$( event.target ).removeClass( "swipe" );
	index = index + 1;
	if (index >= prompts.length) {
		index = 0;
	}
}