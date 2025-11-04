import { Robot } from "./robot.class.js";

export class MobileRobot extends Robot {
    #speed;

    constructor(model, speed) {
        super(model);
        this.#speed = speed;
    }

    get speed() {
        return this.#speed;
    }

    move() {
        console.log(`Moving ${this.model} at ${this.#speed} km/h`);
        this.battery = this.battery - 20;
    }

    toString() {
        return `Mobile robot: ${this.model} (battery: ${this.battery}%) (speed: ${this.#speed} km/h)`;
    }
}