'use strict';

const btnOpenMenu = document.querySelector('.menu-open-btn');
const btnCloseMenu = document.querySelector('.menu-close-btn');

const mobileMenu = document.querySelector('.mobile-menu-closed');

const openMobileMenu = function () {
  btnOpenMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu-open');
    btnCloseMenu.classList.toggle('hidden');
    console.log(e);
  });
};
const closeMobileMenu = function () {
  btnCloseMenu.addEventListener('click', e => {
    mobileMenu.classList.toggle('mobile-menu-open');
    btnCloseMenu.classList.toggle('hidden');
    console.log(e);
  });
};

openMobileMenu();
closeMobileMenu();
