const p1 = {
    nombre: "Juan",
    edad: 45,
    direccion: {
        calle: "Calle perdida",
        numero: 13
    }
}

const p2 = {
    nombre: "Marta",
    edad: 54
}

console.log(p1.direccion?.calle ?? "No hay calle");
console.log(p2.direccion?.calle ?? "No hay calle");// No hay calle
// Lo de arriba equivale a esto
console.log(p2.direccion?.calle ? p2.direccion.calle : "No hay calle"); // No hay calle

const a = null;
console.log(a?.[2]); // Undefined (no falla al usar ?.)
const a2 = [1,2,3,4];
console.log(a2?.[2]); // 3

const form = document.getElementById("f1");
form?.submit?.(); // Solo si form no es null y además existe el método submit