let person1 = {name: "Peter", age: 21};
let person2 = {name: "Mary", age: 34};
let person3 = {name: "Louise", age: 17};

let hobbies = new Map(); // Almacenará una persona con un array de hobbies (string)
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
console.log(hobbies); // Map {Object {name: "Peter", age: 21} => ["Tennis", "Computers", "Movies"]}

hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);
console.log(hobbies);

hobbies.set(person1, ["Nothing"]);
console.log(hobbies);

const productos = new Map();
productos.set("B234", {nombre: "Silla", precio: 24});
productos.set("C623", {nombre: "Mesa", precio: 120});
productos.set("H243", {nombre: "Lámpara", precio: 120});

console.log(productos);

productos.set("B234", {nombre: "Armario", precio: 245});
console.log(productos);

console.log(productos.has("H243")); // true
console.log(productos.has("G222")); // false

productos.delete("H243");
console.log(productos);

console.log(productos.get("B234")); // { nombre: 'Armario', precio: 245 }
console.log(productos.get("H543")); // undefined

for(let p of productos) {
    console.log(`Código: ${p[0]}, nombre: ${p[1].nombre}, precio ${p[1].precio}`);
}

for(let [codigo, prod] of productos) {
    console.log(`Código: ${codigo}, nombre: ${prod.nombre}, precio ${prod.precio}`);
}

productos.forEach((prod, codigo) => console.log(`Código: ${codigo}, nombre: ${prod.nombre}, precio ${prod.precio}`))
