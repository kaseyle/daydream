var urls = [
	"http://daydreaming.herokuapp.com/images/places_1.jpeg",
	"http://daydreaming.herokuapp.com/images/places_2.jpeg",
	"http://daydreaming.herokuapp.com/images/places_3.jpeg",
	"http://daydreaming.herokuapp.com/images/places_4.jpeg",
	"http://daydreaming.herokuapp.com/images/places_5.jpeg",
	"http://daydreaming.herokuapp.com/images/places_6.jpeg",
	"http://daydreaming.herokuapp.com/images/places_7.jpeg",
	"http://daydreaming.herokuapp.com/images/places_8.jpeg",
	"http://daydreaming.herokuapp.com/images/places_9.jpeg",
	"http://daydreaming.herokuapp.com/images/places_10.jpeg",
	"http://daydreaming.herokuapp.com/images/places_11.jpeg",
	"http://daydreaming.herokuapp.com/images/places_12.jpeg"
]

var names = [
	"Golden Gate Bridge, San Francisco, USA",
	"North Sky, Ersfjordbotn, Norway",
	"Rice Terraces, Guilin, China",
	"Opera House, Sydney, Austrailia",
	"Victoria Falls, Zimbabwe",
	"Westland District, New Zealand",
	"Milkyway, Jokulsarlon, Iceland",
	"Eiffel Tower, Paris, France",
	"Tuscany, Italy",
	"Melvaig, Scotland",
	"Rio de Janeiro, Brazil",
	"Trollstigen, Norway"
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
	$( "#name" ).css('visibility','hidden');
	$( "#image" ).attr('src', urls[index]);
	$( "#name" ).text(names[index]);
	index = index + 1;
	setTimeout(function() {nextUrl(event)}, 1000);
}

function nextUrl(event) {
	$( "#name" ).css('visibility','visible');
	$( "#image" ).css('visibility','visible');
	$( event.target ).removeClass( "swipe" );
	if (index >= urls.length) {
		index = 0;
	}
}