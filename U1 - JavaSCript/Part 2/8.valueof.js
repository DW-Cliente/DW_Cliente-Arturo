class Figura {
    get area() {
        return 0;
    }

    valueOf() {
        return this.area;
    }
}

class Circulo extends Figura {
    #radio
    constructor(radio) {
        super();
        this.#radio = radio;
    }

    get area() {
        return (this.#radio ** 2) * Math.PI;
    }
}

class Retangulo extends Figura {
    #ancho;
    #alto;
    constructor(ancho, alto) {
        super();
        this.#ancho = ancho;
        this.#alto = alto;
    }

    get area() {
        return this.#ancho * this.#alto;
    }
}

const circulo = new Circulo(4);
console.log(circulo.area); // 50.2654....
console.log(circulo.valueOf()); // 50.2654....

const rect = new Retangulo(5, 8);
console.log(rect.area); // 40

console.log(circulo + rect); // 90.2654... (suma las 2 áreas)