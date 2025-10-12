const frutas = new Set(["manzana", "pera", "sandia", "melón"]);
frutas.add("naranja");
frutas.add("pera");
frutas.add("pera");
console.log(frutas);

console.log(frutas.has("manzana")); // true
frutas.delete("naranja");
console.log(frutas);

const frutas2 = new Set(["manzana", "naranja", "sandia", "melocotón"]);
console.log(frutas2);
const comunes = frutas.intersection(frutas2);
console.log(comunes); // { 'manzana', 'sandia' }
console.log(frutas.union(frutas2)); // { 'manzana', 'pera', 'sandia', 'melón', 'naranja', 'melocotón' }
console.log(frutas.difference(frutas2)); // { 'pera', 'melón' }
console.log(frutas2.difference(frutas)); // { 'naranja', 'melocotón' }
console.log(frutas.symmetricDifference(frutas2)); //  { 'pera', 'melón', 'naranja', 'melocotón' }