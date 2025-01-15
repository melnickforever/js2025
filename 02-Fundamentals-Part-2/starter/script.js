'use strict';

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1986, 'Jonas'));
