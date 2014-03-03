var riddles = [
    "What does a nosy pepper do?",
	"Why is it hard to explain puns to kleptomaniacs?",
	"How do you kill a vegetarian vampire?",
	"Why don't you ever see a hippo hiding in a tree?",
	"Why does Snoop Lion wear an umbrella?", 
	"Why was six afraid of seven?"
]

var answers = [
    "Get jalapeño business.",
	"They always take things literally.",
	"With a steak to the heart.",
	"Because they're really good at hiding.",
	"Fo' Drizzle.",
	"Because seven was a registered six offender."
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