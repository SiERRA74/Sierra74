// Switch between pause/play button appearance ▶︎ ❚❚
$(".playy").click(function() { $(".pausee").show(); $(".playy").hide(); });

$(".pausee").click(function() { $(".playy").show(); $(".pausee").hide(); });


function songstart() {
    var music = document.getElementById("tune");
    if (music.paused) music.play();
    else music.pause();
}

// When the song ends, reset the button back to ►
$(document).ready(function(){
    var owari = document.getElementById("tune");
    owari.onended = function() { $(".playy").show(); $(".pausee").hide(); };
});