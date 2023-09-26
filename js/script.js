$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 20 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// Add click event handler
Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  $(document).ready(function(){
    $(".service-carousel").owlCarousel();
  });
  var owl = $('.service-carousel');
    owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

$(document).ready(function(){
    $(".testi-caro").owlCarousel();
  });
  $('.testi-caro').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
})