//rip Iwata
var Uscore = 0;
var highscore = 10;
var restart = 0;
var s = 1;
var face = 100;
var good = 200;
var nice = 500;
if (Uscore > 10){
            $("#X3").show();
            Uscore = restart;
        }
if (Uscore > 15){
            $("#X4").show();
            Uscore = restart;
        }
if (Uscore > 20){
            $("#X5").show();
            Uscore = restart;
        }
$("#clicky").hide();
$("#juice").hide();
$("#X3").hide();
$("#X4").hide();
$("#X5").hide();
$("#Back").hide();
$("#Shop").hide();
$("#jim").hide();
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
            $("#clicky").show();
            $("#Shop").show();


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
    }, 1000);
   });


$("#Shop").click(function(){
    alert("You are now entering the shop");
        $("#juice").show();
       

});
$("#juice").click(function(){
    alert("Your upgrade is being confirmed");
    if (Uscore < 20){
    if (Uscore < 20)
            alert("You need at least 20 points");    
    }
    else if {
    setTimeout(function(){
        alert("You now have a x2 upgrade");
        s=2;
        (Uscore = Uscore - 20);

        if (Uscore >= 20)
        
            $("#X3").show();    
    }
    


    }, 5000);
});


$("#X3").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x3 upgrade");
        s=3;
        (Uscore = Uscore - 100);
        if (Uscore >= 100)
            $("#X4").show();
        if (Uscore < 100);
            alert("You need at least 100");
    }, 10000);
});


$("#X4").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x4 upgrade");
        s=4;
        (Uscore = Uscore - 500);
         if (Uscore >= 500)
            $("#X5").show();
        if (Uscore < 500)
            alert("You need at least 500 points");
    }, 15000);
});


$("#X5").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x5 upgrade");
        s=5;
        (Uscore=Uscore - 2500);
        if (Uscore < 2500);
            alert("You need at least 2000 points")
    },20000 );
});

$("#kitsune").click(function(){
    alert("You are now restarting");
    Uscore = 0;
    $('#ranson').html(Uscore);
});

$("#Shop").click(function(){
    alert("You are now entering the shop");
        $("#Shop").hide();
        $("#juice").show();
        $("#Back").show();
        $("#loose").hide();
        $("#kitsune").hide();
        $("#clicky").hide();
        $("#jim").show();
});

$("#Back").click(function(){
    alert("You are now returning");
        $("#Shop").show();
        $("#juice").hide();
        $("#X3").hide();
        $("#X4").hide();
        $("#X5").hide();
        $("#Back").hide();
        $("#loose").hide();
        $("#kitsune").show();
        $("#clicky").show();
        $("#jim").hide();
});
function ranson(){
}

$("#jim").click(function(){
    if (Uscore >= 50)
            $("#X3").show();
            
            if (Uscore >= 100)
            $("#X4").show();
            

            if (Uscore >= 150)
            $("#X5").show();
            
    
     });


