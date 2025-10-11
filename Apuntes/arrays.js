let a = [2, 3, 4, 5];
function cambiaArray(array) {
    array[0] = 99;
}

cambiaArray(a);
console.log(a);

let a2 = new Array(); // Crea un array vacío
a2[0] = 13; // Asigna la primera posición del array
console.log(a2.length); // Imprime 1
console.log(a2[0]); // Imprime 13
console.log(a2[1]); // Imprime undefined (posición no asignada aún)

let nums = [1,2,3,4,5,6,7,8,9]

nums.forEach(element => {
    console.log(element)
});

[1,2,3,4]