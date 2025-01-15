'use strict';
 const friends = ['Michael', 'Steven', 'Peter'];
 console.log(friends);
 const years = new Array(1991, 1984, 2008, 2020);
 console.log(years.length);
 console.log(friends[friends.length - 1]);
 friends[2] = 'Jay';
 friends.push('John');
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const myYears  = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(myYears[0]));

const ages = [calcAge(myYears[0]), calcAge(myYears[1]), calcAge(myYears[2])];
console.log(ages);