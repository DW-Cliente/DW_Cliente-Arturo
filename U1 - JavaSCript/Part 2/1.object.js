let obj = new Object();
console.log(obj);
obj.a = 23;
console.log(obj);
obj.nombre = "Pepe";
console.log(obj); // {a: 23, nombre: 'Pepe'}
obj.saluda = function() {
    console.log(`Hola. Me llamo ${this.nombre}`);
}

obj.saluda(); // Hola. Me llamo Pepe