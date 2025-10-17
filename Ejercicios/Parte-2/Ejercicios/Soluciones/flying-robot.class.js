import { Robot } from "./robot.class.js";

export class FlyingRobot extends Robot {
    #altitude;

    constructor(model, altitude) {
        super(model);
        this.#altitude = altitude; 
    }

    get altitude() {
        return this.#altitude;
    }

    fly() {
        console.log(`FLying ${this.model} to ${this.#altitude} meters`);
        this.battery = this.battery - 50;
    }

    toString() {
        return `Flying robot: ${this.model} (battery: ${this.battery}%) (altitude: ${this.#altitude} meters)`;
    }
}