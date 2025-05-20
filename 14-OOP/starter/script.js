class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        this.logOutput();
    }

    brake() {
        this.speed -= 5;
        this.logOutput();
    }

    logOutput(unit = 'km/h') {
        console.log(`${this.make} doing at ${this.speed} ${unit}`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
        this.logOutput('mi/h');
    }
}

const honda = new Car('Honda', 100);
honda.accelerate();
honda.brake();
honda.speedUS = 12;
console.log(honda.speedUS);

const bmw = new Car('BMW', 200);
bmw.accelerate();
bmw.brake();
console.log(bmw.speedUS);
