
var Uscore = 0;
var highscore = 10;
$("button").click(function(){

    alert("The game is now loading");
    $("h3").hide();
    $("h1").hide();
    $("p").hide();
    setTimeout(function(){ 
        alert("Loaded"); 
            $("button").hide(); 
            $("h2").hide();
            $("h1").show();
            $("h3").show();
            $("p").show();
            $("h1").css("color","black");
            $("h3").css("color","black");

			$("#clicky").click(function() {
				Uscore++;
				$('#ranson').html('<p>' + Uscore + '</p>');
				$("p").css("color","black");
// document.getElementById('score').innerHTML = "Your Score:" + Uscore;
				if (Uscore > highscore) {
					highscore = Uscore;
					$('#highscore').html("New Highscore " + Uscore);
				}
			});
    }, 1000);
   });

