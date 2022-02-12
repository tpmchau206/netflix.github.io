$(document).ready(function () {
    $(".row-container").slick({
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
        nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToScroll: 4,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToScroll: 3,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});
