let usuario = {
    id: 3,
    nombre: "Pedro",
    email: "peter@gmail.com"
}

let {nombre, id, email} = usuario;
console.log(nombre); // Pedro
console.log(id);
console.log(email);

// {propiedad: nombreVariable}
let {nombre: nombreUsuario} = usuario;
console.log(nombreUsuario); // Pedro