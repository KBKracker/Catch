//rip Iwata
var Uscore = 0;
var highscore = 10;
var restart = 0;
var s = 1;
var face = 100;
var good = 200;
var nice = 500;
$("#clicky").hide();
$("#juice").hide();
$("#X3").hide();
$("#X4").hide();
$("#X5").hide();
$("#Back").hide();
$("#Shop").hide();
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
    }, 10000);
   });


$("#Shop").click(function(){
    alert("You are now entering the shop");
        $("#juice").show();
       

});
$("#juice").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x2 upgrade");
        s=2;
    }, 5000);
});
if (Uscore > 100){
    $("#X3").show();
    Uscore = 0;
}

$("#X3").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x3 upgrade");
        s=3;
    }, 10000);
});

if (Uscore > 200){
    $("#X4").show();
}
$("#X4").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x4 upgrade");
        s=4;
        $("#X5").show();
    }, 15000);
});

if (Uscore > 2000){
    $("#X5").show();
}
$("#X5").click(function(){
    alert("Your upgrade is being confirmed");
    setTimeout(function(){
        alert("You now have a x5 upgrade");
        s=5;
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
        $("#ranson").hide();
        $("#Uscore").hide();
        $("#clicky").hide();
});

$("#Back").click(function(){
    alert("You are now returning");
        $("#Shop").show();
        $("#juice").hide();
        $("#X3").hide();
        $("#X4").hide();
        $("#X5").hide();
        $("#Back").hide();
        $("#loose").show();
        $("#kitsune").show();
        $("#ranson").show();
        $("#Uscore").show();
        $("#clicky").show();
});