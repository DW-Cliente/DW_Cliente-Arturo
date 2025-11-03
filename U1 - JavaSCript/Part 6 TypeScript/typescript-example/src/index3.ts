/**
 * Interfaces para tipar objetos
 */

import { type Persona, esMayorDeEdad } from "./interfaces/persona";

const personas: Persona[] = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 },
  { nombre: "María", edad: 18 },
  { nombre: "Pepe", edad: 23, esAdmin: true },
];

console.log(esMayorDeEdad(personas[0])); // true

function suma(n1: number, n2: number = 0) {
    return n1 + n2;
}

console.log(suma(4));