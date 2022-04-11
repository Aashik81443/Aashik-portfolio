$(document).ready(function () {
    function initBgCover(context) {
        if (!context) context = $('body');
        context.find('.bg-cover').each(function () {
            var holder = $(this);
            var image = holder.find('> img').hide();
            var imageSrc = image.prop('src');
            holder.css({
                backgroundImage: 'url(' + imageSrc + ')',
            });
        });
    }

    initBgCover();

    $('.testimonial-slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        // responsive: [{
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             adaptiveHeight: true,
        //         }
        //     }
        // ]
    });

    //aos
    AOS.init({
        duration: 1000
    });

    //counts
    $(".counts").countUp({
        time: 3000,
        delay: 10,
    });

    //isotope filter
    $(document).ready(function () {

        $('.grid').isotope({
            itemSelector: '.grid-item',
        });

        // filter items on button click
        $('.filter-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({
                filter: filterValue
            });
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });
    })





});