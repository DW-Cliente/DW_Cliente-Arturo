class Persona {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.nombre = nombre; // Uso el setter
        this.edad = edad; // Uso el setter
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nombre) {
        this.#nombre = nombre ?? this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(edad) {
        if(edad < 0) {
            throw RangeError("La edad no puede ser negativa!");
        }
        this.#edad = edad;
    }

    saluda() {
        console.log(`Hola, soy ${this.nombre} (${this.edad})`);
    }
}

const p = new Persona("Pepe", 54);
p.saluda();
console.log(p.edad); // 54 (llamada implícita al getter)
p.nombre = null;
console.log(p.nombre); // Pepe
p.edad = 23; // Llamada implícita al setter
// p.edad = -4; // Uncaught RangeError RangeError: La edad no puede ser negativa!