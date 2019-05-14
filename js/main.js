$(document).ready(function() {
    // Navigation Menu Toggle
    $("div#toggle").on("click", function() {
        $("div#menu").addClass("open", 200);
    });

    // Navigation Menu Close
    $("a.menuItem").on("click", function() {
        $("div#menu").removeClass("open", 200);
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
                    }, 800, function() {
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