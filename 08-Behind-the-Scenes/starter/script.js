'use strict';

var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        //console.log(this);
        console.log(2037 - this.year);

        // const self = this; // self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }

        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`), // this is undefined
}
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}  // arguments is not available in arrow functions
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
}
addArrow(2, 5, 8); // arguments is not available in arrow functions

let a = [1, 2, 3, 4];
let b = a;
a[0] = 5;
console.log(a, b);