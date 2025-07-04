$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $(".main-header").addClass("fixed-header");
    } else {
        $(".main-header").removeClass("fixed-header");
    }
});