import { Robot } from './robot.class.js';

export class RobotMovil extends Robot {
    #velocidad;

    constructor(modelo, velocidad) {
        super(modelo);
        this.#velocidad = velocidad;
    }

    getVelocidad() {
        return this.#velocidad;
    }

    mover() {
        console.log(`Moviendo ${this.getModelo()} a ${this.#velocidad} km/h`);
        const nueva = Math.max(0, this.getBateria() - 20);
        this.setBateria(nueva);
    }

    toString() {
        return `[Robot Móvil] -> Modelo = ${this.getModelo()}, Velocidad = ${this.#velocidad} km/h, Batería = ${this.getBateria()}%`;
    }
}
