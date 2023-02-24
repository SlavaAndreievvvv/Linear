'use strict';

// BURGER
const burger = document.querySelector('#burger');

function showBurgerMenu () {
  const burgerMenu = document.querySelector('#burger-menu');
  burgerMenu.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.classList.toggle('open');
}

burger.addEventListener('click', showBurgerMenu);

//Swiper

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageDown: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    1248: {
      slidesPerView: 'auto',
      spaceBetween: 24,
      grid: {
        rows: 2,
        fill: "row",
      },
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




