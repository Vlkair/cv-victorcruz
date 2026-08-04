$(document).ready(function() {
    
    // Smooth scroll para enlaces internos
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Animación de barras de progreso
    $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 800);
    });

});
