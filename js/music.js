$(document).ready(function(){
    
    setTimeout(function() {
        $("#title").addClass("animated fadeInUp");
        $("#video").addClass("animated fadeIn");
        $("#logo").addClass("animated fadeIn");
        $("#title").removeClass("hidden");
        $("#video").removeClass("hidden");
        $("#logo").removeClass("hidden");
    }, 600);
    
//    Clock................................................
    var counter = setInterval(function() {
        var on15 = new Date("Jan 17, 2018 12:00:00").getTime();
        var now = new Date().getTime();
        var distance = Math.abs(now - on15);
        while (distance > 900000) {
            distance -= 900000;
        }
        var seconds = Math.floor(900 - distance/1000) % 60;
        var minutes = Math.floor(15 - distance/60000);
        if (seconds < 10) {
            $("#secFix").html(0);
        } else {
            $("#secFix").html("");
        }
        $("#seconds").html(seconds);
        $("#minutes").html(minutes);
    }, 1000);
//    End of clock....................................................................
    
//    Animated entrances on scroll
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
        
}
//    End of loads on scroll
    
    
    
});