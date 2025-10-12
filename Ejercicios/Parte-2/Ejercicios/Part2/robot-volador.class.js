import { Robot } from './robot.class.js';

export class RobotVolador extends Robot {
    #altura;

    constructor(modelo, altura) {
        super(modelo);
        this.#altura = altura;
    }

    getAltura() {
        return this.#altura;
    }

    volar() {
        console.log(`Volando ${this.getModelo()} a ${this.#altura} metros`);
        const nueva = Math.max(0, this.getBateria() - 50);
        this.setBateria(nueva);
    }

    toString() {
        return `[Robot Volador] -> Modelo = ${this.getModelo()}, Altura = ${this.#altura} m, Batería = ${this.getBateria()}%`;
    }
}
