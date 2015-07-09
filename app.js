$("button").click(function(){
    alert("The game is now loading");
    setTimeout(function(){ 
        alert("Loaded"); 
            $("button").hide(); 
            $("h2").hide();
    }, 60000);
     window.alert("Validation May Take A While");
   });

