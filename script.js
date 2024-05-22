$('.main_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.service').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        800: {
            items: 2
        },
        1023: {
            items: 3
        },
        1170: {
            items: 3
        }
    }
});
$('.blog').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
$('.brand__content').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        1169: {
            items: 5
        },
        1023: {
            items: 5
        },
        767: {
            items: 3
        },
        577: {
            items: 3
        },
        479: {
            items: 2
        },
        359: {
            items: 2
        },
        0: {
            items: 2
        }
    }
});
AOS.init();
Query(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
