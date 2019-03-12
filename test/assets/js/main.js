$(document).ready(function() {
    // Opening animation
    $("span#open1").delay(1300).addClass("new", 600);
    $("span#open2").delay(1700).addClass("new", 600);
    $("span#open3").delay(2100).addClass("new", 600);

    // Scroll-into-view code
    $(window).scroll(function() {
        // About section fades in
        let windowBottom = $(window).scrollTop() + $(window).height();
        let aboutOffset = ($("#about").offset().top - windowBottom) * -1;

        if(aboutOffset >= 100) {
            $("div#about1").addClass("scroll", 600);
            $("div#about2").addClass("scroll", 600);
        }
    });
});