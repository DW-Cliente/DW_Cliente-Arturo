let hola: string;
hola = "Hola TypeScript"; 
hola = hola + "!!!";
console.log(hola);

const a: (string | number)[] = [];
a.push("!!!");
console.log(a);

function restaAbs(a: number, b: number): number {
    if(a < b) {
        return b - a;
    } 
    return a - b;
}

const resultado = restaAbs(10, 5);
console.log(resultado * 12);