$(document).ready(function(){
    
//    arrow scrolling in/out................................
     $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $("#arrowUp").addClass("fadeInDown");
            $("#arrowUp").removeClass("hidden fadeOutUp");
        } else {

            $("#arrowUp").addClass("fadeOutUp hidden");
            $("#arrowUp").removeClass("fadeInDown");
        }
    });
//    End of arrow scroll....................................
    
//    arrow click goes back to top
    $("#arrowUp").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    
});