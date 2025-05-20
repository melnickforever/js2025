'use strict';

// Class expression
//const PersonCl = class {};

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //Methods will be added to the .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            alert(`${name} is not a full name!`);
        }
        return this._fullName;
    }

    get fullName() {
        return this._fullName;
    }
}

const jessica = new PersonCl('Jessica Devis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

const walter = new PersonCl('Walter White', 1965);

// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

//1. Classes are not Hoisted
//2. Class are first-class citizens
//3. Classes are executed in strict mode

const account = {
    owner: 'Jonas',
    movements: [200, 450, -400, 3000, -650, -130],
    interestRate: 1.2,
    pin: 1111,

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },

    getBalance() {
        return this.movements.reduce((acc, mov) => acc + mov, 0);
    }
}
account.latest = 23;
console.log(account.latest);