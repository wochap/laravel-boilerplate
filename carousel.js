if ($("#slider-portada").length) {
    $("#slider-portada").owlCarousel({
        autoPlay: true,
        pagination: true,
        singleItem: true,
        transitionStyle: "fade"
    });
}

if ($("#slider-capacitacion").length) {
    if ($(window).width() <= '768') {
        $("#slider-capacitacion").owlCarousel({
            autoPlay: true,
            navigation : true,
            navigationText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
            singleItem: true
        });
    }
}

if ($("#slider-testimonio").length) {
    $("#slider-testimonio").owlCarousel({
        autoPlay: true,
        pagination: true,
        singleItem: true,
        transitionStyle: "fade"
    });
}
