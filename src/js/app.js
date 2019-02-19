import 'slick-carousel';

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

  $('.product__thumbs img').on('click', function() {
    $('img.is-selected').removeClass('is-selected');
    $(this).addClass('is-selected');
    var selectedImage = $('.product__images img:eq('+ $(this).index() + ')');
    $('html, body').animate({
      scrollTop: $(selectedImage).offset().top
    }, 500);
  });


  if ($(window).width() < 768) {

    var $status = $('.js-count');
    var $slickElement = $('.slider');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
      arrows: false,
      fade: false,
      infinite: true
    });
  }


});
