$(document).ready(function(){

//responsive stuff for bootstrap pageItems
    resizeWidth();
    $(window).on("resize", resizeWidth);
    
    function resizeWidth() {
        var width = $(window).width();
        if (width < 980 && width > 450) {
            $(".pageItem").removeClass("col-lg-4");
            $(".pageItem").addClass("col-md-6");  
        } else {
            $(".pageItem").removeClass("col-md-6");
            $(".pageItem").addClass("col-lg-4"); 
        }
    };
    
    
    
//    front page animations fade in on load...........................................
    setTimeout(function() {
        $("#title").addClass("animated fadeInDown");
        $("#video").addClass("animated fadeIn");
        $("#logo").addClass("animated fadeIn");
        $("#title").removeClass("hidden");
        $("#video").removeClass("hidden");
        $("#logo").removeClass("hidden");
    }, 600);
    
//    end front page animations.......................................................
    
//    Clock...........................................................................
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
            $(".secFix").html(0);
        } else {
            $(".secFix").html("");
        }
        $(".seconds").html(seconds);
        $(".minutes").html(minutes);
    }, 1000);
//    End of clock.....................................................................
    

    
    
    
});