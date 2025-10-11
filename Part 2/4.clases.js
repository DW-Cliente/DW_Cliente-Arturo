class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola, soy ${this.nombre} (${this.edad})`);
    }
}

console.log(typeof Persona); // function

const p = new Persona("Juan", 23);
p.saluda();