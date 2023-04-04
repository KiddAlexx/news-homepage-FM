'use strict';

const body = document.querySelector('body');

const btnOpenMenu = document.querySelector('.menu-open-btn');
const btnCloseMenu = document.querySelector('.menu-close-btn');

const mobileMenu = document.querySelector('.mobile-menu-closed');

const openMobileMenu = function () {
  btnOpenMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu-open');
    body.classList.toggle('lock-scroll');
  });
};

const closeMobileMenu = function () {
  btnCloseMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu-open');
    body.classList.toggle('lock-scroll');
  });
};

openMobileMenu();
closeMobileMenu();
