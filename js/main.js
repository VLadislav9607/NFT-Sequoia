
const buttonMobile = document.querySelector('.button__mobile'),
   buttonMobileActive = document.querySelector('.button__mobile-icon'),
   navMobile = document.querySelector('.nav__mobile');

buttonMobile.addEventListener('click', () => {
   buttonMobileActive.classList.toggle('button-active');
   navMobile.classList.toggle('show');

});


$('.roadmap__slider').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 4,
   arrows: true,
   dots: true,
   autoplay: true,
   autoplaySpeed: 4000,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
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
         breakpoint: 624,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
      }
   ]
});


const animationElements = document.querySelectorAll('._anim__el');

if (animationElements.length > 0) {

   animateByScroll();
   window.addEventListener('scroll', animateByScroll);
}

function animateByScroll() {
   animationElements.forEach(element => {
      const elementHeight = element.clientHeight;
      const elementOffset = getOffsetEl(element).top;
      console.log(window.innerHeight)
      const elementIndex = 4;

      let pointElement = document.documentElement.clientHeight + elementHeight / elementIndex;

      if (window.scrollY > elementOffset - pointElement) {
         element.classList.add('show');
      }
   });
}

function getOffsetEl(el) {
   const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset;

   return { top: rect.top + scrollTop };

}








