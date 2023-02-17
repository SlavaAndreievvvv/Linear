'use strict';

const { default: Swiper } = require("swiper");

// BURGER
const burger = document.querySelector('#burger');

function showBurgerMenu () {
  const burgerMenu = document.querySelector('#burger-menu');
  burgerMenu.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.classList.toggle('open');
}

burger.addEventListener('click', showBurgerMenu);

// GRID
// // const grid = document.querySelector('#grid');

// // const msnry = new Masonry( grid, {
// //   itemSelector: '.card-review',
// //   percentPosition: true,
// //   fitWidth: true,
// });

// SLIDER

new Swiper('.tools-section__list', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});




