'use strict';

const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    year: 1996,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
}

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson
}

const marriedJessica = marryPerson(jessica1, 'Devis');

// const marriedJessica = jessica;
// marriedJessica.firstName = 'Devis';

console.log('before:', jessica1);
console.log('after:', marriedJessica);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
}

// shallow copy
const jessicaCopy = {...jessica};
jessicaCopy.lastName = 'Davis';

console.log(jessica, jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
//
// console.log('before:', jessica);
// console.log('after:', jessicaCopy);

// Deep copy
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);