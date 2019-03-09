$(document).ready(function() {
    // Opening animation
    $("span#open1").delay(1300).addClass("new", 600);
    $("span#open2").delay(1700).addClass("new", 600);
    $("span#open3").delay(2100).addClass("new", 600);

    // Scroll-into-view code
    $(window).scroll(function() {
        let windowBottom = $(window).scrollTop() + $(window).height();
        let aboutOffset = ($("#about").offset().top - windowBottom) * -1;

        // About section fades in
        if(aboutOffset >= 100) {
            $("#about_content").addClass("scroll", 600);
        }
    });
});