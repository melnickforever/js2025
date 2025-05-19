'use strict';

///////////////////////////////////////
// Modal window
const section1 = document.querySelector('#section--1');
const obsCollback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Section 1 is visible');
            entry.target.classList.add('section--visible');
        } else {
            entry.target.classList.remove('section--visible');
        }
    });
};
const obsOptions = {
    root: null,
    threshold: 0.2,
};
const observer = new IntersectionObserver(obsCollback, obsOptions);
observer.observe(section1);