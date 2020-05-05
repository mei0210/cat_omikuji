
let hamb_state = 0;
$('#hamb-btn').on('click', function() {
  $('.header_hamb-btn_line').toggleClass('hamb-active');
  if (hamb_state == 0) {
    hamb_state = 1;
    $('#topmenuSP').css('display', 'flex');
    $(this).css('background-color', 'white');
    $('#topmenuSP').animate({
      top: 0,
      opacity: 1
    }, 300);
  } else if (hamb_state == 1) {
    hamb_state = 0;
    $(this).css('background-color', '#fff');
    $('.header_menuSP').animate({
      top: '-300px',
      opacity: 0
    }, 300);
    setTimeout(function() {
      $('#topmenuSP').css('display', 'none');
    }, 300);
  }
});
