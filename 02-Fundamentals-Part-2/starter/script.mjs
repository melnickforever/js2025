/* Write your code below. Good luck! 🙂 */
'use strict';

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //     return  2037 - birthYear;
  // }

    calcAge: function() {
        if (!this.age) {
            this.age = 2037 - this.birthYear;
        }
        return this.age;
    },

    getSummary: function () {
      return `Summary: ${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }

}

console.log(jonas.calcAge());
console.log(jonas['calcAge']());

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(jonas.getSummary());

