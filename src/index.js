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






