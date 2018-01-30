$(document).ready(function(){
   
   setTimeout(function() {
        $("#music").addClass("animated fadeInUp");
        $("#music").removeClass("hiddenIframe");
    }, 1200);  
    
    
    
    
    
    
//    cinematic button..........................................................
    $("#cinematicButton").on('click', function() {  
        if(!$(this).attr("loaded")) {
            $("#commercialButton").removeAttr("loaded");
            $("#commercialButton").removeClass("orangeFont");
            $("#cinematicButton").addClass("orangeFont");
            $("#playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/347178291%3Fsecret_token%3Ds-YcqZZ&amp;color=68578E&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"); 
        };                
    });
// end cinematic button.........................................................
    
//    commercial button..........................................................
    $("#commercialButton").on('click', function() {        
        if(!$(this).attr("loaded")) {
            $("#cinematicButton").removeAttr("loaded");
            $("#cinematicButton").removeClass("orangeFont");
            $("#commercialButton").addClass("orangeFont");
            $("#playlist").attr("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/347178633%3Fsecret_token%3Ds-oeE30&amp;color=68578E&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");  
        };   
    });
// end commercial button.........................................................
    
    
});