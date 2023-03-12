"use strict";

// BURGER
const burger = document.querySelector("#burger");

function showBurgerMenu() {
  const burgerMenu = document.querySelector("#burger-menu");
  burgerMenu.classList.toggle("open");
  burger.classList.toggle("open");
  document.body.classList.toggle("open");
}

burger.addEventListener("click", showBurgerMenu);

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

//
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

let sBrowser,
  sUsrAg = navigator.userAgent;

if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
} else if (sUsrAg.indexOf("Opera") > -1) {
  sBrowser = "Opera";
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
  let $macImg = $imgWrap.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="commandl-section__link KeyB" id="KeyB">
        <a class="commandl-section__link KeyB" id="KeyB">
          Ctrl
        </a>
      </div>
      `
  );
  animateOnKeyDown(17, 66);
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
  let $macImg = $imgWrap.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="commandl-section__link KeyB" id="KeyB">
        <a class="commandl-section__link KeyB" id="KeyB">
          <img
            src="http://localhost:1234/command-line-img-1.5f3fe782.svg"
            alt="image"
            class="commandl-section__image"
            id="image"
          />
        </a>
      </div>
      `
  );
  animateOnKeyDown(55, 11);
} else {
  sBrowser = "unknown";
}

// document.onkeydown = function (e) {
//   console.log(e);
// };
