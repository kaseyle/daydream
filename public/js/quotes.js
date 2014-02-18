var urls = [
	"http://daydreaming.herokuapp.com/images/quotes_1.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_2.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_3.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_4.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_5.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_6.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_7.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_8.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_9.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_10.jpeg",
	"http://daydreaming.herokuapp.com/images/quotes_11.jpeg"
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
	$( "#image" ).css('visibility','hidden');
	$( "#image" ).attr('src', urls[index]);
	index = index + 1;
	setTimeout(function() {nextUrl(event)}, 1000);
}

function nextUrl(event) {
	$( "#image" ).css('visibility','visible');
	$( event.target ).removeClass( "swipe" );
	if (index >= urls.length) {
		index = 0;
	}
}