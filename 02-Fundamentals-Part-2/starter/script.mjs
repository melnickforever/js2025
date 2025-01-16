/* Write your code below. Good luck! 🙂 */
'use strict';

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michale', 'Peter', 'Steven'],
    true
];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

let rep = 1;
while (rep < 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}
