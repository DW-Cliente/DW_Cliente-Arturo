function sumaPromise(n1, n2) {
  return new Promise((resolve, reject) => {
    if(n1 < 0 || n2 < 0) {
        reject(Error("No puedo sumar números negativos"));
    }
    setTimeout(() => resolve(n1 + n2), 3000);
  });
}

/**
 * IMPORTANTE: No se debe de poner código debajo de un await que no dependa
 * del resultado del mismo
 */
async function opera() {
    const res = await sumaPromise(3,6);
    const res2 = await sumaPromise(res, 5);
    console.log(res2);
}

opera();

document
  .getElementById("boton")
  .addEventListener("click", () => console.log("Hola"));
