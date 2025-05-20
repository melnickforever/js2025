class Account {

    locale = navigator.language;
    bank = 'Bankist';
    #movements = [2];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.interestRate = 1.5;
        this.#pin = pin;
        this.currency = currency;
    }

    get movements() {
        return this.#movements;
    }

    #approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas Schmedtmann', 'EUR', 1111);
console.log(acc1);
console.log(acc1.movements);