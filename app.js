$("button").click(function(){
    alert("The game is now loading");
    setTimeout(function(){ 
        alert("Loaded"); 
            $("button").hide(); 
            $("h2").hide();
    }, 60000);

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


