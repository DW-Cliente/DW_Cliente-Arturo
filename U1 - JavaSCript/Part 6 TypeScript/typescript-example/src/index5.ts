interface Direccion {
    calle: string;
    numero: number;
    cp: string;
}

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
    telefonos: string[];
}

const p: Persona = {
    nombre: "Pedro",
    edad: 35,
    direccion: {
        calle: "Perico Palotes",
        numero: 12,
        cp: "24353"
    },
    telefonos: ["9542345453", "6574352643"]
};
console.log(p);