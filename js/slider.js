const swiper = new Swiper('.swiper', {
   loop: true,
   slidesPerView: 1,
   spaceBetween: 16,
   breakpoints: {
      768: {
         slidesPerView: 2,
      },
      1240: {
         slidesPerView: 3,
      }
   },
   pagination: {
     el: '.slider__pagination',
     bulletClass: "slider__bullet",
     bulletActiveClass: "slider__bullet_active",
   },
   navigation: {
     nextEl: '.next',
     prevEl: '.prev',
   },
 });
