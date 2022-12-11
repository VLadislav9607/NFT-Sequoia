// 'use strict';


// const buttonMobile = document.querySelector('.button__mobile');
// const buttonMobileActive = document.querySelector('.button__mobile-icon');
// const navMobile = document.querySelector('.nav__mobile');


// buttonMobile.addEventListener('click', () => {
//    buttonMobileActive.classList.toggle('button-active');
//    navMobile.classList.toggle('show__slide');

// });




// const buttonPrev = document.querySelector('.slider_arrow-prev'),
//    buttonNext = document.querySelector('.slider_arrow-next');



$('.roadmap__slider').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 4,
   arrows: false,
   dots: true,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
         }
      },
      {
         breakpoint: 780,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2
         }
      },
      {
         breakpoint: 480,
         settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});
