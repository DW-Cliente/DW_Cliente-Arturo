export class Robot {
    #model
    #battery

    constructor(model) {
        this.#model = model;
        this.#battery = 100; 
    }

    get model() {
        return this.#model;
    }

    get battery() {
        return this.#battery;
    }

    set battery(charge) {
        if(charge < 0 || charge > 100) {
            console.error(`${this.#model}: ERROR! Battery level must be between 0 and 100`);
            return;
        }

        this.#battery = +charge;
    }

    charge() {
        this.#battery = 100;
    }
}