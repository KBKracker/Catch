$("button").click(function(){
    alert("The game is now loading");
    setTimeout(function(){ 
        alert("Loaded"); 
            $("button").hide(); 
            $("h2").hide();
    }, 60000);

});


