$(document).ready(function(){

  ctaResponsive('.ctas');

  // Smooth Scroll with Offset (needed for inline-header)
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 100 },
      900, 'swing');
  	});

  $('.cycle-slide-active .slide-content').addClass('animated fadeIn');

});

/*-----------------------------------------------------------------------------------*/
/*  Sticky Header
/*-----------------------------------------------------------------------------------*/

$(window).scroll(function() {
  $(this).scrollTop() > 100 ? $(".sticky-nav").addClass("sticky") : $(".sticky-nav").removeClass("sticky");
});
