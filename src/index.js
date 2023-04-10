"use strict";

import commandIcon from "../src/assets/images/command-line-img-1.svg";

// BURGER
const burger = document.querySelector("#burger");

function showBurgerMenu() {
  const burgerMenu = document.querySelector("#burger-menu");
  burgerMenu.classList.toggle("open");
  burger.classList.toggle("open");
  document.body.classList.toggle("open");
}

burger.addEventListener("click", showBurgerMenu);

// SWIPER

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
      slidesPerView: "auto",
      spaceBetween: 16,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    1248: {
      slidesPerView: "auto",
      spaceBetween: 24,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Windows or Mac
let $img = document.querySelector("#image");
let $imgWrap = document.querySelector(".commandl-section__images");

let animateOnKeyDown = (key1, key2) => {
  let flag = false;
  document.onkeydown = function (event) {
    if (event.keyCode == key1) flag = true;
    if (event.keyCode == key2 && flag) {
      flag = false;
      document.body.classList.add("onkeydown");
      document.body.classList.add("animate");
      setTimeout(() => {
        document.body.classList.remove("onkeydown");
      }, 600);
    }
  };
};

if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {
  $imgWrap.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="commandl-section__link KeyB" id="KeyB">
       <img
        src=${commandIcon}
        alt="image"
        class="commandl-section__image"
        id="image"
      />
    </div>  
  `
  );
  animateOnKeyDown(55, 11);
} else {
  $imgWrap.insertAdjacentHTML(
    "afterbegin",
    `       
    <div class="commandl-section__link KeyB" id="KeyB">
      Ctrl
    </div>     
    `
  );
  animateOnKeyDown(17, 66);
}

// Popover

const popover = document.querySelector("#popover");
const content = document.querySelector("#popoverContent");
const arrow = document.querySelector("#popoverArrowShow");

popover.addEventListener("mouseenter", () => {
  content.classList.add("popoverShow");
  arrow.classList.add("popoverArrowShow");
});

popover.addEventListener("mouseleave", () => {
  content.classList.remove("popoverShow");
  arrow.classList.remove("popoverArrowShow");
});

content.addEventListener("mouseenter", () => {
  content.classList.add("popoverShow");
  arrow.classList.add("popoverArrowShow");
});

content.addEventListener("mouseleave", () => {
  content.classList.remove("popoverShow");
  arrow.classList.remove("popoverArrowShow");
});

//

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
  ".card-linear, .card-review, .title, .hero-section__subtitle, .cycles-section__picture, .roadmap-section__picture, .KeyB, .sponsors-section, .animate-caption"
);

for (let elm of elements) {
  observer.observe(elm);
}
