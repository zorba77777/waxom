$('.slider').slick({
    dots: true,
});

$('.slider2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true
});

$('.slider2').on('swipe', function (event, slick, direction) {

    $(this).find('.slick-slide').removeClass('slide_pos_center');

    var currentSlide = $(this).slick('slickCurrentSlide');

    var currentSlideIt = $(this).find('.slick-slide').eq(currentSlide);

    console.log(currentSlideIt);
});

$('.recent figure').on("mouseover", function () {
    $(this).children('.sep').attr('src', 'images/30sepActive.png');
});

$('.recent figure').on("mouseout", function () {
    $(this).children('.sep').attr('src', 'images/30sep.png');
});