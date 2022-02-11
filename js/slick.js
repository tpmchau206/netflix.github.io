$(document).ready(function () {
    $(".row-container").slick({
        //     slidesToShow: 5,
        //     slidesToScroll: 5,
        //     // centerMode: true,
        //     prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
        //     nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',

        // });

        // var filtered = false;

        // $('.js-filter').on('click', function () {
        //     if (filtered === false) {
        //         $('.filtering').slick('slickFilter', ':even');
        //         $(this).text('Unfilter Slides');
        //         filtered = true;
        //     } else {
        //         $('.filtering').slick('slickUnfilter');
        //         $(this).text('Filter Slides');
        //         filtered = false;
        //     }

        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
        nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});
