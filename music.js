$(document).ready(function(){
    $(".playy").click(function() {
        $(".pausee").show();
        $(".playy").hide();
    });

    $(".pausee").click(function() {
        $(".playy").show();
        $(".pausee").hide();
    });
});

function songstart() {
var harmonia = document.getElementById("tune");
    if (harmonia.paused) {
        harmonia.play();
    } else { 
        harmonia.pause();
    }
}

$(document).ready(function(){
    var owari = document.getElementById("tune");
    owari.onended = function() {
        $(".playy").show();
        $(".pausee").hide();
    };
});