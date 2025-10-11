const animales = ["perro", "gato", "loro", "vaca", "cebra"];
const [a1, a2, ...resto] = animales;
console.log(a1); // perro
console.log(a2); // gato
console.log(resto); // ['loro', 'vaca', 'cebra']

function imprimirUsuario(datos, otraInfo = "Nada") {
  console.log("ID: " + datos[0]);
  console.log("Nombre: " + datos[1]);
  console.log("Email: " + datos[2]);
  console.log("Otra info: " + otraInfo);
}

function imprimirUsuario2([id, nombre, email], otraInfo = "Nada") {
  console.log("ID: " + id);
  console.log("Nombre: " + nombre);
  console.log("Email: " + email);
  console.log("Otra info: " + otraInfo);
}

let infoUsu = [3, "Pedro", "peter@gmail.com"];
imprimirUsuario(infoUsu, "No es muy listo");
imprimirUsuario2(infoUsu);

function imprimeAreaRect(rect) {
  console.log(
    `Ancho: ${rect[0]}, Alto: ${rect[1]}. Área: ${rect[0] * rect[1]}`
  );
}

function imprimeAreaRect2([ancho, alto]) {
  console.log(
    `Ancho: ${ancho}, Alto: ${alto}. Área: ${ancho * alto}`
  );
}

imprimeAreaRect2([4, 7]);