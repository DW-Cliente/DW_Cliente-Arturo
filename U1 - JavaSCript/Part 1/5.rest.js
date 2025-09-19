const max = Math.max(3,24,6,17,83);
console.log(max);

function getMedia(...notas) {
    console.log(notas); // Imprime [5, 7, 8.5, 6.75, 9] (está en un array)
    let total = notas.reduce((total,notas) => total + notas, 0);
    return total / notas.length;
}

console.log(getMedia(5, 7, 8.5, 6.75, 9, 6.75)); // Imprime 7.1666666

let nums = [12, 32, 6, 8, 23];
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 32

const a = [1,2,3,4];
const b = [...a];
a[0] = 99;
console.log(a);
console.log(b);