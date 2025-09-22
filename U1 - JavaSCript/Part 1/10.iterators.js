const frutas = ["manzana", "pera", "sandia", "melón"];
const it1 = Iterator.from(frutas);
console.log(it1);
const it2 = frutas.values();
console.log(it2);

console.log(it1.next()); // { value: 'manzana', done: false }
console.log(it1.next()); // { value: 'pera', done: false }
console.log(it1.next()); // { value: 'sandia', done: false }
console.log(it1.next()); // { value: 'melón', done: false }
console.log(it1.next()); // { value: 'undefined', done: true }

let entry = it2.next();
while (!entry.done) {
  console.log(entry.value);
  entry = it2.next();
}

const it3 = frutas.values();
for (fruta of it3) {
  console.log(fruta);
}

const nums = [1, 2, 3, 4, 5];
const itNum = nums.values();
itNum.next();
itNum.next();
// itNum.forEach(n => console.log(n)); // 3 4 5
const numsArray = [...itNum]; // [3,4,5]
console.log(numsArray);

const nombres = [
  "Pepe",
  "Juan",
  "Ana",
  "Rigoberto",
  "Antonio",
  "María",
  "Marcos",
  "Alberto",
  "Sandra",
  "Andrés",
];
// Los 2 nombres más largos que empiecen por A en mayúsculas
const nombresA = nombres
  .toSorted((n1, n2) => n2.length - n1.length) // Ordenamos de mayor a menor longitud
  .values() // Obtenemos un iterador
  .filter((n) => n.startsWith("A")) // Filtramos los que empiezan por A
  .take(2) // Nos quedamos con los 2 primeros
  .map(n => n.toUpperCase()) // Transformamos a mayúsculas
  .toArray();
  console.log(nombresA);
