/**
 * Tipado avanzado
 */

const a = ["perro", "casa", "árbol", "mesa", "coche"];
const palabra = a.find((p) => p.startsWith("z")); // Devuelve string | undefined

// console.log(palabra.toLocaleUpperCase()); // ERROR: 'palabra' is possibly 'undefined'
console.log(palabra?.toLocaleUpperCase()); // Si palabra es undefined, devuelve undefined sin acceder al método
// console.log(palabra!.toLocaleUpperCase()); // Estamos seguros de que no es undefined (ERROR: no lo estamos, petaría)