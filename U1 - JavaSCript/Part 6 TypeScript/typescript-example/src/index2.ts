function operar(
  n1: number,
  n2: number,
  f: (n1: number, n2: number) => number
): number {
  return f(n1, n2);
}

console.log(operar(10, 5, (x, y) => x + y));
console.log(operar(10, 5, (x, y) => x * y));

type Operacion = (n1: number, n2: number) => number;

function operar2(n1: number, n2: number, f: Operacion): number {
  return f(n1, n2);
}

console.log(operar2(10, 5, (x, y) => x - y));

function longitud(cifra: number | string): number {
    return String(cifra).length;
}

console.log(longitud(345)); // 3
console.log(longitud("6546")); // 4
