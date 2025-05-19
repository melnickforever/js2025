'use strict';

// const Person = function (firstName, birthYear) {
//     console.log(this);
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//
//     // Never do this!
//     // this.calcAge = function () {
//     //     console.log(2037 - this.birthYear);
//     // }
// }
// const jonas = new Person("Jonas", 1991);
// console.log(jonas);
//
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} is linked to prototype
// // 4. function automatically returns {}
//
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);
// console.log(jonas instanceof Person);
//
// // Prototypes
// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear);
// }
//
// jonas.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
//
// // .prototypeOfLinkedObjects
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
//
// console.log(jonas.hasOwnProperty('firstName'));
// // in prototype not in object
// console.log(jonas.hasOwnProperty('species'));
//
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
//
// console.dir(Person.prototype.constructor);
//
// const arr = [1, 2, 3, 4, 5, 6, 7];

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    this.logOutput();
};
Car.prototype.brake = function () {
    this.speed -= 5;
    this.logOutput();
};
Car.prototype.logOutput = function () {
    console.log(`${this.make} doing at ${this.speed} km/h`);
};

const honda = new Car('Honda', 100);
honda.accelerate();
honda.brake();

const bmw = new Car('BMW', 200);
bmw.accelerate();
bmw.brake();
