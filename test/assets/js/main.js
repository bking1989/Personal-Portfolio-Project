$(document).ready(function() {
    $("#menuToggle").on("click", function() {
        $("#navBar").toggleClass("expand", 700, "easeInOutExpo");
    });
});