const nums = [23, 14, 112, 8, 45, 6, 201];
console.log(nums.toSorted()); // [112, 14, 201, 23, 45, 6, 8]
console.log(nums.toSorted((n1, n2) => n1 - n2)); // [6, 8, 14, 23, 45, 112, 201]
console.log(nums.toSorted((n1, n2) => n2 - n1)); // [201, 112, 45, 23, 14, 8, 6]

const words = ["bird", "tabletennis", "chairman", "zoo", "spoon"];
console.log(words.toSorted((w1, w2) => w2.localeCompare(w1))); // ['zoo', 'tabletennis', 'spoon', 'chairman', 'bird']

// Ordenar palabras por longitud
console.log(words.toSorted((w1, w2) => w1.length - w2.length)); // ['zoo', 'bird', 'spoon', 'chairman', 'tabletennis']

console.log(words.with(1, "football")); // ['bird', 'football', 'chairman', 'zoo', 'spoon']
console.log(words); // ['bird', 'tabletennis', 'chairman', 'zoo', 'spoon']

words.forEach((w, i) => console.log(`${i}: ${w}`));

console.log(nums.every((n) => n % 2 === 0)); // false
console.log(nums.some((n) => n % 2 === 0)); // true

console.log(words.map((w) => w[0])); // ['b', 't', 'c', 'z', 's']
console.log(words.map((w) => w.length)); // [4, 11, 8, 3, 5]

console.log(nums.filter((n) => n % 2 === 0));

const nums2 = [3, 4, 2, 7, 12, 8];
console.log(nums2.reduce((total, n) => total + n, 0)); // 36
console.log(nums2.reduce((max, n) => Math.max(max, n))); // 12

// Devuelve array con posiciones donde aparezca la letra 'a'
const letras = ["a", "b", "d", "a", "j", "a", "f"];
const posiciones = letras
  .map((l, i) => (l === "a" ? i : -1))
  .filter((v) => v !== -1);
console.log(posiciones);

console.log(nums.find(n => n % 2 === 0)); // 14

console.log(words.map(w => Array.from(w)).flat());
console.log(words.flatMap(w => Array.from(w)));
