'use strict';
/*
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

 */

let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

g();
f();