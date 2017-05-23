$(document).ready(function(){
  
  // CTA equal heights
  ctaResponsive('.ctas');

  // Overview Script
    $('#main-content h2, #main-content h3').each(function() {
      var id = $(this).prop('id');

      if (id.length > 0) {
         $('#submenu ul').append('<li><a href=\"#' + id + '\">' + $(this).html() + '</a></li>');
       }
     });

  // Smooth Scroll to Anchor Link
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
//
// $(window).scroll(function() {
//   $(this).scrollTop() > 100 ? $(".sticky-nav").addClass("sticky") : $(".sticky-nav").removeClass("sticky");
// });
