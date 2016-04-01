$('svg').on('click', function (e) {
  $(this).addClass('js-animate');
});

$('.svg').on('animationend', function (e) {
  $(this).removeClass('js-animate');
});

$('.js-animate').on('animationend', function (e) {
  $(this).addClass('engage');
});
