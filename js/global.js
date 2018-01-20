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
    
//    arrow click goes back to top.............................
    $("#arrowUp").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
//    End arrow click goes back to top..........................
    
    //    Animated entrances on scroll..............................
    $(window).scroll(lazyload);
    
    function lazyload(){
    var wt = $(window).scrollTop();    //* top of the window
    var wb = wt + $(window).height();  //* bottom of the window

    $(".onScrollFadeUp").each(function(){
        var ot = $(this).offset().top;  //* top of object 
        var ob = ot + $(this).height(); //* bottom of object

        if(!$(this).attr("loaded") && wt<=ob && wb >= ot) {
            $(this).removeClass("hidden");
            $(this).addClass("animated fadeInUp");
            $(this).attr("loaded",true);
        }
   });
        
        $(".onScrollSlideLeft").each(function(){
        var ot = $(this).offset().top;  //* top of object 
        var ob = ot + $(this).height(); //* bottom of object

        if(!$(this).attr("loaded") && wt<=ob && wb >= ot) {
            $(this).removeClass("hidden");
            $(this).addClass("animated slideInLeft");
            $(this).attr("loaded",true);
        }
   });
        
            $(".onScrollFadeIn").each(function(){
        var ot = $(this).offset().top;  //* top of object 
        var ob = ot + $(this).height(); //* bottom of object

        if(!$(this).attr("loaded") && wt<=ob && wb >= ot) {
            $(this).removeClass("hidden");
            $(this).addClass("animated fadeIn");
            $(this).attr("loaded",true);
        }
   });
       
        
}
//    End of animations on scroll...........................................
    
});