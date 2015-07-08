<<<<<<< Updated upstream

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            
        });
    });
});
var Uscore = 1;

var highscore = 10;

var press = function () {
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		return;
		}
};
=======
$("button").click(function(){
    $("#box").animate({height: "300px"});
});
$("button").click(function(){
    $("#box").animate({width: "300px"});
});
$("button").click(function(){
    $("#box").animate({height: "150px"});
});
$("button").click(function(){
    $("#box").animate({height: "150px"});
});
>>>>>>> Stashed changes
