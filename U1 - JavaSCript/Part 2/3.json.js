const persona = {
    nombre: "Juan",
    edad: 23,
    telefonos: ["543253455", "546054856"],
    direccion: {
        calle: "Calle perdida 23",
        cp: "54355",
        ciudad: "Albacete"
    }
}

persona.telefonos.push("999888777");
console.log(persona.telefonos.join(" - "));
console.log(persona.direccion.ciudad);
console.log(persona);