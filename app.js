
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
