class Persona {
    #nombre
    #edad
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    saluda() {
        console.log(`Me llamo ${this.#nombre} y tengo ${this.#edad}`);
    }

    toString() {
        return `${this.#nombre} (${this.#edad})`;
    }

    valueOf() {
        return this.#edad; // Los objetos se compararán por edad
    }
}

class Profesor extends Persona {
    #modulo;
    constructor(nombre, edad, modulo) {
        super(nombre, edad);
        this.#modulo = modulo;
    }

    saluda() {
        super.saluda();
        console.log(`Imparto el módulo de ${this.#modulo}`);
    }

    toString() {
        return `${super.toString()} - Módulo: ${this.#modulo}`;
    }
}

const profe = new Profesor("Juanito", 45, "Cliente");
profe.saluda();
console.log(`Profesor: ${profe}`);

const persona = new Persona("Pepe", 23);
persona.saluda()
console.log(`Persona: ${persona}`);

console.log(profe > persona); // True (usa el valueOf)

console.log(profe + persona); // 68 (45 + 23) Usa el valueOf