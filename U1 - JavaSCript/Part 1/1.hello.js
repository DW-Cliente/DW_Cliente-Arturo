'use strict';

/**
 * Devuelve la suma de n1 + n2
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number} Suma de n1 + n2 
 */
function suma(n1, n2) {
    return n1 + n2;
}

function suma2(n1, n2) {
    return n1 + n2;
}

let div = document.getElementById("div");
for(let i = 1; i <= 10; i++) {
    let p = document.createElement("p");
    p.textContent = `Párrafo ${i}`;
    p.addEventListener('click', () => console.log(`Párrafo ${i}`));
    div.append(p);
}

// num = 45;
// console.log(num);

function f(nombre) {
    console.log(`Hola ${nombre ?? 'Anónimo'}`);
}

f();
f("Pepe");