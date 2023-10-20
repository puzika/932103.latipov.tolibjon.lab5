'use strict';

const news = document.querySelector('.news');
const popup = document.querySelector('.popup');
const popupHeading = document.querySelector('.popup__heading');
const popupIntro = document.querySelector('.popup__intro');
const overlay = document.querySelector('.overlay');

function showPopup() {
   popup.classList.remove('popup--hidden');
   overlay.classList.remove('overlay--hidden');
}

function hidePopup() {
   popup.classList.add('popup--hidden');
   overlay.classList.add('overlay--hidden');
}

news.addEventListener('click', function (e) {
   const target = e.target.closest('.news__box');

   const title = target.querySelector('.news__heading').textContent;
   const intro = `${title}: ${target.querySelector('.news__text').textContent}`;

   popupHeading.textContent = title;
   popupIntro.textContent = intro;

   showPopup();
});

overlay.addEventListener('click', hidePopup);

