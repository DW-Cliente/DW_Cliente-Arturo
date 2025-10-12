const objJson  = {
    nombre: "Pepe",
    saluda() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
};
objJson.edad = 36;

console.log(objJson['nombre']); // Pepe
objJson.saluda();
console.log(objJson); // {nombre: 'Pepe', saluda: ƒ, edad: 36}
delete objJson.nombre;
console.log(objJson); // {saluda: ƒ, edad: 36}

console.log(typeof objJson); // object

const o = {
    'p-1': 23,
    'p-2': 50,
    '+`3ḉ23`+243': "Hola"
}

console.log(o);
console.log(o['p-1']); // 23
console.log(o['+`3ḉ23`+243']); // Hola




