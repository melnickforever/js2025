'use strict';

///////////////////////////////////////
// Modal window

const h1 = document.querySelector('h1');
// Selecting elements: child
console.log(h1.document.querySelector('.highlight'))
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'ortangered';

// Selecting elements: parent
console.log(h1.parentNode);
console.log(h1.parentElement);
console.log(h1.closest('.header')); 