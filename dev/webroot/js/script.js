$(document).ready(function(){
  
  // CTA equal heights
  ctaResponsive('.ctas');

  // Overview Script
    $('#main-content h2, #main-content h3').each(function() {
      var id = $(this).prop('id');

      if (id !== undefined) {
         $('#submenu ul').append('<li><a href=\"#' + id + '\">' + $(this).html() + '</a></li>');
       }
     });

  // Smooth Scroll to Anchor Link
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-45
        }, 900);
        return false;
      }
    }
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
