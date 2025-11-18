
import { users } from './users.js'

const seccion = "Estás en la sección:"
const copiaUsers = [...users.values()];


//Sección 1
console.log(seccion, 1,);

const resultado = copiaUsers
    .filter(u => u.role === 'admin')
    .sort((a, b) => a.age - b.age)
    .slice(0, 3)
    .map(u => ({ email: u.email, password: u.password }))
;
console.log(resultado);


//Sección 2
console.log(seccion, 2);

const pc1 = copiaUsers
    .filter(u => u.authorizations?.includes('PC1'))
    .map(u => u.name);

const pc9 = copiaUsers
    .filter(u => u.authorizations?.includes('PC9'))
    .map(u => u.name);

const set1 = new Set(pc1);
const set2 = new Set(pc9);
const ambos = [...set1].filter(nombre => set2.has(nombre));

const enList = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

console.log(`PC1: ${enList.format(pc1)}`);
console.log(`PC9: ${enList.format(pc9)}`);
console.log(`PC1 y PC9: ${enList.format(ambos)}`);


//Sección 3
console.log(seccion, 3);

function esSegura(password) {

    if (typeof password !== 'string') {
        return false; 
    }        
        const longitudMinima = password.length >= 5;           
        const tieneMinuscula = /[a-z]/.test(password);         
        const tieneMayuscula = /[A-Z]/.test(password);         
        const tieneNumero = /\d/.test(password);               
        const tieneSimbolo = /[^A-Za-z0-9]/.test(password);    
        const formatoValido = longitudMinima && tieneMinuscula && tieneMayuscula && tieneNumero && tieneSimbolo;

    return formatoValido;
}

const passSeguro = copiaUsers
    .filter(usuario => esSegura(usuario.password))
    .map(usuario => `${usuario.name} -> ${usuario.password}`);

console.log(passSeguro);


//Sección 4
console.log(seccion, 4);

function numeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

const indice = numeroAleatorio(users.length);
const usuarioAleatorio = users[indice];

const nuevoUsuario = {...usuarioAleatorio, ultimoAcceso: new Date().toLocaleString('en-US')};

console.log("Usuario con último acceso:");
console.log(nuevoUsuario);

console.log("Usuario original:");
console.log(usuarioAleatorio);