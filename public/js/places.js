var urls = [
	"http://media-cache-ak0.pinimg.com/736x/94/b0/4d/94b04d18777846902bccf184197ef0ec.jpg",
	"http://media-cache-ec0.pinimg.com/736x/bd/ac/b6/bdacb627207b209d6fd0efe825b8dc6d.jpg",
	"http://media-cache-ak0.pinimg.com/736x/46/88/15/468815b902435b03789b9180f4036869.jpg",
	"http://media-cache-ec0.pinimg.com/736x/15/68/b4/1568b4e1a55070f81cc447e442f29b83.jpg",
	"http://media-cache-ak0.pinimg.com/736x/5d/92/ca/5d92ca2dac1aabb9c44cf93a9a34bd65.jpg",
	"http://media-cache-ak0.pinimg.com/736x/1c/7f/4e/1c7f4ed295e1396290f7697e7fd54ba3.jpg",
	"http://media-cache-ec0.pinimg.com/736x/87/a3/d9/87a3d9fdbd84dc091917893e20131b6f.jpg",
	"http://media-cache-ec0.pinimg.com/736x/93/49/44/9349442868e770563090eb1a6f8b9eaa.jpg",
	"http://media-cache-ec0.pinimg.com/736x/24/91/e1/2491e13fd9c834ed0649662c83451e60.jpg",
	"http://media-cache-ec0.pinimg.com/736x/4f/91/50/4f9150bd5844cabdb035a8037527ed4d.jpg",
	"http://media-cache-ec0.pinimg.com/736x/87/d3/34/87d33439ec6eb1d0812fb8a84e387d83.jpg",
	"http://media-cache-ak0.pinimg.com/736x/97/98/23/97982345d8c49e0d2fda503782abfd10.jpg"

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