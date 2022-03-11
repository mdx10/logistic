$('#reviews-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: true
});

$('#intro-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: false,
  adaptiveHeight: true,
  rows: 0,
  autoplay: true,
  autoplaySpeed: 7000,
  fade: true
});

$('#intro-slider-prev').on('click', function() {
  $('#intro-slider').slick('slickPrev');
})

$('#intro-slider-next').on('click', function() {
  $('#intro-slider').slick('slickNext');
})