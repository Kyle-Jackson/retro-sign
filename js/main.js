$('.btn').on('click', function (e) {
  $('.lines').toggleClass('.lines path');
});

$('svg').on('click', '.lines', function () {
  $(this).addClass('grow');
});
