//Ejemplo Promesa

function sumaPromise(n1, n2){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(n1 + n2), 3000)
    });
}

sumaPromise(3, 6).then((r) => console.log(`Resultado ${r}`));
console.log("Hola");
