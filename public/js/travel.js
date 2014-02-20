$(document).ready(function() {
	initializePage();
})

function initializePage() {
    console.log("Javascript enabled");

    $("#thousand").click(click1);
    $("#travelocity").click(click2);
    $("#vayable").click(click3);

    function click1(e1) {
        url = "http://1000places.com";
        window.location = url;
    }
    function click2(e2) {
        url = "http://www.travelocity.com";
        window.location = url;
    }
    function click3(e3) {
        url = "https://www.facebook.com/vayable";
        window.location = url;
    }
}