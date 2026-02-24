(function($){
  'use strict'

  $(document).ready(function(){

    $('.humbarger-menu').on('click',function(){
      $('.main-menu').toggleClass('active');
      $(this).find('.burger').toggleClass('open');
      $('body').toggleClass('hidden-body');
    });

    $('.review-slider-init').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
    });
   
  });

  $(window).on('load',function(){
      headerFix();
  });

  $(window).on('scroll',function(){
      headerFix();
  });

  function headerFix() {
    var window_height = $(window).outerHeight(),
    document_height = $(document).outerHeight(),
    topPos = $(document).scrollTop(),
    header_height = $('.header-part').outerHeight();

    if (topPos > 100) {
        if ((window_height < document_height) && $('.header-part').hasClass('sticky')) {
          $('.header-part').addClass('sticky-fixed');
        }
    } else {
        $('.header-part').removeClass('sticky-fixed');
    }
  }

})(jQuery);