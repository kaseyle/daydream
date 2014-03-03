var riddles = [
	"Name four days of the week that start with the letter T.",
	"A magician holding an egg above a concrete floor claims he can drop it two feet without breaking it. How?",
	"A boy is locked in a room with only a piano and and a calendar. What does he eat, and how does he escape?",
	"From what heavy seven-letter word can you take away two letters and still have eight left?",
	"What walks all day on its head?", 
	"What is round as a dishpan and no matter the size, all the water in the ocean can't fill it up?"
]

var answers = [
	"Tuesday, Thursday, Today and Tomorrow!",
	"He drops it from three feet above the floor.",
	"He eats the dates on the calendar and escapes with a piano key.",
	"Weight.",
	"A horse-shoe nail.",
	"A sieve."
]

var index = 0;
var init = true;

$(document).ready(function() {
	initializePage();
})

function initializePage() {
    // Bind the swipeHandler callback function to the swipe event on div.box
    $( "#swipe" ).on( "swipe", swipeHandler );
    $( "#answer").click(showAnswer);
    $( "#answer").hide();
   
    // Callback function references the event target and adds the 'swipe' class to it
    function swipeHandler( event ){
    	event.preventDefault();
    	swipe(event);

    	if (init == true) {
    		$("#answer").fadeIn();
    		$("#swipe").text("Swipe for next");
    	}
    	init = false;
    }

    function showAnswer(e) {
    	e.preventDefault();
    	$("#toptext").text(answers[index-1]);
    	$( "#toptext" ).css('visibility','visible');
    	console.log(index-1);
    	if (index >= riddles.length) {
    	index = 0;
    	console.log("reindex to 0")
    	}
    }
}

function swipe(event) {
	$( event.target ).addClass( "swipe" );
	$( "#toptext" ).css('visibility','hidden');
	setTimeout(function() {nextPrompt(event)}, 100);
}

function nextPrompt(event) {
	$( "#toptext" ).text(riddles[index]);
	$( "#toptext" ).css('visibility','visible');
	$( event.target ).removeClass( "swipe" );
	if (init == false) index++;
	console.log(index);
}