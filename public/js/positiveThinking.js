var prompts = [
	"Turn your CAN'TS into CANS: From 'why do I always get bad grades' to 'Next time I will do better'.",
	"Be kind. Getting into the habit of being kind and forgiving to others will help you extend the same courtesy to yourself.",
	"Remember that events and situations aren't inherently good or bad -- we just project those descriptions onto them.",
	"Become the captain of your own ship. Instead of worrying what other people think of you and trying to live up the their standards, decide for yourself who you want to be and what you want to accomplish.",
	"Never forger to laugh. Laughter relieves stress and reminds you not to take life so seriously.",
	"Remind yourself daily that although we may not be able to control what happens to us, we are always in charge of our reactions.",
	"Having people around who see the best in you will help you see the best in yourself.",
	"Remembering all the good things that you have makes it a whole lot easier not to focus on what you don't have."
]

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