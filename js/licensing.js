$(document).ready(function(){
    
//    cinematic button..........................................................
    $("#cinematicButton").on('click', function() {  
        if(!$(this).attr("loaded")) {
            $("#commercialButton").removeAttr("loaded");
            $("#commercialButton").removeClass("orangeFont");
            $("#cinematicButton").addClass("orangeFont");
            $("#playlist").attr("src", "https://www.youtube.com/embed/videoseries?list=PLN5GL_fKa-4i0fnjXbUOEkx1UlNhYaHYa"); 
        };                
    });
// end cinematic button.........................................................
    
//    commercial button..........................................................
    $("#commercialButton").on('click', function() {        
        if(!$(this).attr("loaded")) {
            $("#cinematicButton").removeAttr("loaded");
            $("#cinematicButton").removeClass("orangeFont");
            $("#commercialButton").addClass("orangeFont");
            $("#playlist").attr("src", "https://www.youtube.com/embed/videoseries?list=PLN5GL_fKa-4gj9QumV-X6cuc10wFBRmV2");  
        };   
    });
// end commercial button.........................................................
    
    
});