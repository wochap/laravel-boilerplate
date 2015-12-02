(function(){
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

    if ($("#carousel-concepto").length) {
        $("#carousel-concepto").owlCarousel({
            autoPlay: 3500,
            pagination: true,
            navigation: false,
            singleItem: true,
            transitionStyle: "fade"
        });
    }

    if ($("#carousel-portada").length) {
        $("#carousel-portada").owlCarousel({
            autoPlay: true,
            pagination: false,
            navigation: false,
            singleItem: true,
            transitionStyle: "fade"
        });
    }

    if (html.classList.contains("mobil")) {
        if ($("#carousel-ofrecemos").length) {
            $("#carousel-ofrecemos").owlCarousel({
                autoPlay: 3000,
                singleItem: true,
                pagination: false,
                navigation: false
            });
        }

        if ($("#carousel-subscripcion").length) {
            $("#carousel-subscripcion").owlCarousel({
                autoPlay: 3000,
                singleItem: true,
                pagination: false,
                navigation: false
            });
        }
    }
})();



