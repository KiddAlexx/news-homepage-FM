'use strict';

const body = document.querySelector('body');

const btnOpenMenu = document.querySelector('.menu-open-btn');
const btnCloseMenu = document.querySelector('.menu-close-btn');

const mobileMenu = document.querySelector('.mobile-menu');

const page01 = document.querySelector('.page01');

const openMobileMenu = function () {
  btnOpenMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu-open');

    /* check to ensure that class is only toggled if it is present first */
    if (mobileMenu.classList.contains('mobile-menu-close')) {
      mobileMenu.classList.toggle('mobile-menu-close');
    }
    body.classList.toggle('lock-scroll');
    page01.classList.toggle('medium-blur');
  });
};

const closeMobileMenu = function () {
  btnCloseMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu-open');
    mobileMenu.classList.toggle('mobile-menu-close');
    body.classList.toggle('lock-scroll');
    page01.classList.toggle('medium-blur');
  });
};

openMobileMenu();
closeMobileMenu();
