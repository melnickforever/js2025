'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flighNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`);
        this.bookings.push({flight: `${this.iataCode}${flighNum}`, name});
    }
}

lufthansa.book(239, 'Jonas');
lufthansa.book(635, 'Mike');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;
//book(23, 'Sarah');
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 583, 'Mary');
console.log(swiss);

//apply method is similar to call method, but it does not receive a list of arguments after the this keyword. Instead, it receives an array of arguments.
const flightData = [583, 'George'];
book.apply(swiss, flightData);
console.log(swiss);

//bind method is similar to call method, but it does not immediately call the function. Instead, it returns a new function where the this keyword is bound.
book.call(swiss, ...flightData);
