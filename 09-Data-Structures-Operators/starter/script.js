'use strict';

// Selecting elements

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, "We closed :(");

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 6;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);
//rest.clear();
console.log(rest.get(arr));

const question = new Map([
                             ['question', 'What is the best programming language in the world?'],
                             [1, 'C'],
                             [2, 'Java'],
                             [3, 'Javasript'],
                             ['correct', 3],
                             [true, 'Correct!'],
                             [false, 'Try again!'],
                         ]);

console.log(question);

const hours = {
    open: 11,
    close: 23,
};
// Convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries({open: 11, close: 23}));
console.log(hoursMap);

for (const [key, val] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${val}`);
    }
}

// const answer = Number(prompt('Your answer'));
//
// console.log(question.get('correct') === answer ? console.log(question.get(true)) : console.log(question.get(false)));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);