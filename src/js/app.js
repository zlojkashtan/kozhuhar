$( document ).ready(function() {

  $('.has-sub').on('click', function() {
    $('.has-sub.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  });

  $('.js-burger').on('click', function() {
    $('.js-menu').toggleClass('is-opened');
    $('.nav-sub__button').toggleClass('d-none');
    $('body').toggleClass('is-fixed');
  });

});
