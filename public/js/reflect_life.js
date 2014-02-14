var prompts = [
	"Think of 3 people you are grateful to have in your life.",
	"Think of 3 opportunities you are grateful to have.",
	"Think of 3 experiences you are grateful to have had.",
	"Think of 3 talents you are grateful to have.",
	"Think of 3 places you are grateful to have visited.",
	"Think of 3 things in your daily life that you are grateful for."
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