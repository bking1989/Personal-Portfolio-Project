$(document).ready(function() {
    // Landing Animation
    const landingAnim = () => {
        $("div#landing > div#guide").toggleClass("animation", 1600);
    }

    setInterval(landingAnim, 0);
})