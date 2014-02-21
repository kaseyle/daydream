$(document).ready(function() {
	initializePage();
})

var typing = true;

function initializePage() {
    console.log("Javascript enabled");
    $("#senttext").hide();
    $("#release").click(clickListener);

    function clickListener(e) {
        if(typing) {
            $("#secretbox").fadeOut(1000);
            $("#senttext").fadeIn(500);
            $("#release").text("Another secret?")
            clearText();
            typing = false;

            function clearText() {
                document.getElementById("secretbox").value="";
            }
        }else {
            $("#secretbox").fadeIn(500);
            $("#senttext").fadeOut(400);
            $("#release").text("Release into the void.");
            typing = true;
        }
    }
}