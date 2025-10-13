function sumaPromise(n1, n2) {
  return new Promise((resolve, reject) => {
    if(n1 < 0 || n2 < 0) {
        reject(Error("No puedo sumar números negativos"));
    }
    setTimeout(() => resolve(n1 + n2), Math.random()*5000);
  });
}

const p1 = sumaPromise(3, 5);
const p2 = sumaPromise(7, 4);
const p3 = sumaPromise(12, 6);
const p4 = sumaPromise(-4, -2);

Promise.all([p1, p2, p3]).then(results => {
  console.log(`Promise.all: ${results}`);
});

Promise.race([p1, p2, p3]).then(result => {
  console.log(`Promise.race: ${result}`);
}); 

Promise.allSettled([p1, p2, p3, p4]).then(results => {
  console.log(`Promise.allSettled:`, results);
})

