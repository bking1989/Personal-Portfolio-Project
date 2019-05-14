$(document).ready(function() {
    // Navigation Menu Toggle
    $("div#toggle").on("click", function() {
        $("div#menu").toggleClass("open", 200);
    });

    // Outside Click to Close
    $("body").on("click", function(e) {
        e.preventDefault();

        if (e.target.id !== "menu" && e.target.id !== "toggle" && $("div#menu").hasClass("open") == true) {
            $("div#menu").toggleClass("open", 200);
        }
    });

    // Smooth Scroll for Links
    $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex','-1');
                            $target.focus();
                        };
                        $target.blur();
                    });
                }
            }
        });
    })