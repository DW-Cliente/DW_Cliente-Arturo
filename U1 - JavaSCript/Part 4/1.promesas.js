function sumaPromise(n1, n2) {
  return new Promise((resolve, reject) => {
    if(n1 < 0 || n2 < 0) {
        reject(Error("No puedo sumar números negativos"));
    }
    setTimeout(() => resolve(n1 + n2), 3000);
  });
}

sumaPromise(3, 6)
  .then((r) => {
    console.log(`Resultado 1: ${r}`);
    return sumaPromise(r, 5);
  })
  .then((r) => console.log(`Resultado 2: ${r}`));
console.log("Hola");

sumaPromise(-3, 6)
  .then((r) => {
    console.log(`Resultado 1: ${r}`);
    return sumaPromise(r, 5);
  })
  .then((r) => console.log(`Resultado 2: ${r}`))
  .catch(e => console.error(e));