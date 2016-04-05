$('svg').on('click', function (e) {
  $(this).toggleClass('js-animate');
});

$('.svg').on('mouseover', function (e) {
  $('.btn').toggleClass('btn:active');
});
