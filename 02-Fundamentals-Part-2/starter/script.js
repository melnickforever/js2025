'use strict';

// Function Declaration

const calcAge1 = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge1(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired`);
        return -1;
    }
}
yearsUntilRetirement(1991, 'Jonas');