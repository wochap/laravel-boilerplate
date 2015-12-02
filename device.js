if ($(window).width() <= '768') {
    $('html').addClass('mobil');
} else {
    $('html').addClass('desktop');
}


// añade clases si es mobil o desktop
var html = document.getElementsByTagName("html")[0];
if (window.innerWidth  <= '480') {
    html.classList.add("mobil");
} else {
    html.classList.add("desktop");
}
