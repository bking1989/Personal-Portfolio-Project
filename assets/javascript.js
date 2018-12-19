const landingFn = () => {
    $("#line1").delay(1600).animate({"opacity": "1"}, 1000);
    $("#line2").delay(2000).animate({"opacity": "1"}, 1000);
    $("#line3").delay(2400).animate({"opacity": "1"}, 1000);
    $("#landingBtn").delay(4400).animate({"opacity": "1"}, 1000);
};

const menuToggle = () => {
    $("#navigation").toggleClass("toggle", 400);
};

$(document).ready(function() {
    landingFn();

    $("#menuBtn").on("click", function(event) {
        event.preventDefault();
        menuToggle()
    });
});