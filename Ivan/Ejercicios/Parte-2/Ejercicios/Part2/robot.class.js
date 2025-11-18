export class Robot {
    #modelo;
    #bateria;

    constructor (modelo) {
        this.#modelo = modelo;
        this.#bateria = 100;
    }

    getModelo() {
        return this.#modelo;
    }

    getBateria() {
        return this.#bateria;
    }

    setBateria(valor) {
        if (typeof valor === 'number' && valor >= 0 && valor <= 100) {
            this.#bateria = valor;
        } else {
            console.error('Error: la batería debe estar entre 0 y 100.');
        }
    }

    cargarBateria() {
        this.#bateria = 100;
    }

    toString() {
        return `[Robot] Modelo = ${this.#modelo}, Batería = ${this.#bateria}%`;
    }

}