var prompts = [
	"Be kind. Getting into the habit of being kind and forgiving to others will help you extend the same courtesy to yourself",
	"Think of one thing you are excited for today.",
	"Think of one thing you are grateful for today.",
	"Think of one thing that made you laugh today.",
	"Think of one thing you are proud of today.",
	"Think of one person you want to be happy today."
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