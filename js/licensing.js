$(document).ready(function(){
    
//    cinematic button..........................................................
    $("#cinematicButton").on('click', function() {  
        if(!$(this).attr("loaded")) {
            $("#commercialButton").removeAttr("loaded");
            $("#commercialButton").removeClass("orangeFont");
            $("#cinematicButton").addClass("orangeFont");
            $("#playlist").attr("src", "https://www.youtube.com/embed/videoseries?list=PL4HnzWbYV53dQmVOgcFbhZfJmoxmzIWs3");
        };                
    });
// end cinematic button.........................................................
    
//    commercial button..........................................................
    $("#commercialButton").on('click', function() {        
        if(!$(this).attr("loaded")) {
            $("#cinematicButton").removeAttr("loaded");
            $("#cinematicButton").removeClass("orangeFont");
            $("#commercialButton").addClass("orangeFont");
            $("#playlist").attr("src", "https://www.youtube.com/embed/videoseries?list=PL4HnzWbYV53cKzd6mEzGd2Of5uKt3EQgg");
            
        };   
    });
// end commercial button.........................................................
    
    
});