'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
const logo = document.querySelector('.nav__logo');
const nav = document.querySelector('.nav');
logo.getAttribute('src');

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//     alert("addEventListener: Great! You are reading the heading");
// });

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomCalor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomCalor();
    e.preventDefault();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomCalor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
    console.log('link');
});