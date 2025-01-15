'use strict';

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);


friends.unshift('John');
console.log(friends);

const popped = friends.pop();
console.log(popped);
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push('Piter');
console.log(friends.includes('Steven'));
console.log(friends.includes('23'));

if (friends.includes('Piter')) {
    console.log('You have a friend called Piter');
}