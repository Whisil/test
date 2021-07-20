
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         loop: true,
//         nav:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:1
//             }
//         }
//     });
//   });

new Splide( '.splide', {
    type   : 'loop',
    clones: 3,
	perPage: 3,
    autoWidth: true,
    pagination: false,
    arrow: false,
    arrowPath: "M24.3536 21.6958C24.5488 21.891 24.5488 22.2076 24.3536 22.4029L21.1716 25.5849C20.9763 25.7801 20.6597 25.7801 20.4645 25.5849C20.2692 25.3896 20.2692 25.073 20.4645 24.8777L23.2929 22.0493L20.4645 19.2209C20.2692 19.0256 20.2692 18.709 20.4645 18.5138C20.6597 18.3185 20.9763 18.3185 21.1716 18.5138L24.3536 21.6958ZM0 21.5493L24 21.5493V22.5493L0 22.5493L0 21.5493Z",
	focus  : 'center',
}).mount();



$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});



$(document).ready(function(){
    $(".brands__owl-carousel").owlCarousel();
});



const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 0,
  

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper__next-btn',
      prevEl: '.swiper__prev-btn',
    },
  
});


  