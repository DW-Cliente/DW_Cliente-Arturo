function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Tom"); 
sayHello();

let sayHello2 = function(name) {
    console.log(`Hello ${name}`);
}

sayHello2("Pepe");

console.log(typeof sayHello); //Function
console.log(typeof sayHello2); //Function
let sayHello3 = sayHello;
sayHello3("Juan");

const ANIMALES = ["gato", "avestruz", "Perro", "Abeja", "Halcon"];
const ANIMALES_A = ANIMALES.filter(function(a) {return a.toLowerCase().startsWith("a")});
console.log(ANIMALES_A);

const animalesA3 = ANIMALES.filter(a => a.toLowerCase().startsWith("a"));
console.log(animalesA3);

function saluda(nombre) {
    console.log(`Hola ${nombre ?? "Anínimo"} `);
}

saluda("Hector"); //Hola hector
saluda(); //Hola anonimo
saluda("") //Hola

function saluda2(nombre = "Anónimo") {
    console.log(`Hola ${nombre}`);
}

saluda2("Tom"); // Hola Tom
saluda2(); // Hola Anónimo
saluda2(null) // Hola Nul (Solo para undefined)

const a = [23, 45, 67, 89, 12];
const iterador = Iterator.from(a);

for(const n of iterador){
    console.log(n);
}
// Imprime los valores: 23 45 67 89 12


const ab = ["hola", "adiós", "casa", "coche"];
const iterador2 = Iterator.from(ab);

console.log(iterador2.flatMap((s) => [...s]).toArray()); 
// ['h', 'o', 'l', 'a', 'a', 'd', 'i', 'ó', 's', 'c', 'a', 's', 'a', 'c', 'o', 'c', 'h', 'e']




