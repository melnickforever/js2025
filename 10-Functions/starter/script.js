'use strict';

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Check in');
    } else {
        alert('Wrong passpoer!');
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(jonas);
checkIn(flight, jonas);