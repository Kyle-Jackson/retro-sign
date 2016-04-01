$('.btn').on('click', function (e) {
  $('.lines').toggleClass('.js-animate');
});

$('svg').on('click', function (e) {
  $(this).addClass('js-animate');
});
