$(document).ready(function(){
    
    $(".owl-carousel").owlCarousel({
        items: 6,
        loop: true,
        center: false,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,

        responsive: {
            0:{
                items:1
            },
            800: {
                items:2
            },
            1100:{
                items:6
            }

        } 
       

    });
    
  });
