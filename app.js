//rip Iwata
var Uscore = 0;
var highscore = 10;
var s = 1;
$("#juice").hide();
$("#loose").click(function(){

    alert("The game is now loading");
    $("h3").hide();
    $("h1").hide();
    $("p").hide();
    $("i").hide();
    setTimeout(function(){ 
        alert("Loaded"); 
            $("#loose").hide();
            $("h2").hide();
            $("h1").show();
            $("h3").show();
            $("p").show();
            $("i").show();
            $("h1").css("color","black");
            $("h3").css("color","black");
            $("i").css("color","black");

			$("#clicky").click(function() {
				Uscore+=s;
				$('#ranson').html('<p>' + Uscore + '</p>');
				$("p").css("color","black");
// document.getElementById('score').innerHTML = "Your Score:" + Uscore;
				if (Uscore > highscore) {
					highscore = Uscore;
					$('#highscore').html("New Highscore " + Uscore);
				}
			});
    }, 5000);
   });

setTimeout(function(){
        $("#juice").show();
}, 15000);

$("#juice").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x2 upgrade");
        s=2;
    }, 15000);
});

