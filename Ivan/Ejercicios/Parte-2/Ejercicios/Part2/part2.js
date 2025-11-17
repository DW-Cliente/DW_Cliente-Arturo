import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { RobotMovil } from './robot-movil.class.js';
import { RobotVolador } from './robot-volador.class.js';

const r1 = readline.createInterface({ input, output });

// Array inicial de robots
const robots = [
    new RobotMovil('R2-D2', 15),
    new RobotMovil('C-3PO', 22),
    new RobotVolador('Iberia-Bot', 80),
    new RobotVolador('Voladorsito-Bot', 150),
];

// Función para mostrar el menú
function mostrarMenu() {
    console.log(`
        --------------------------------
        MENÚ
        --------------------------------
        1) Mostrar robots móviles
        2) Mostrar robots voladores
        3) Crear un robot
        4) Mover robots
        5) Hacer volar robots
        6) Mostrar información de un robot
        0) Salir
    `);
}

let opcion = '';
while (opcion !== '0') {

    mostrarMenu();

    opcion = await r1.question('Elige una opción: ');

    // 1. Móviles
    if (opcion === '1') {
        robots
            .filter(r => r instanceof RobotMovil)
            .forEach(r => console.log(r.toString()));
    }

    // 2. Voladores
    if (opcion === '2') {
        robots
            .filter(r => r instanceof RobotVolador)
            .forEach(r => console.log(r.toString()));
    }

    // 3. Crear robot
    if (opcion === '3') {
        const modelo = await r1.question('Modelo: ');
        const tipo = (await r1.question('Tipo (movil/volador): ')).toLowerCase();

        const esMovil = ['movil'].includes(tipo);
        const esVolador = ['volador'].includes(tipo);

        if (esMovil) {
            const velocidadStr = await r1.question('Velocidad (km/h): ');
            const velocidad = Number(velocidadStr);
            robots.push(new RobotMovil(modelo, velocidad));
            console.log('Robot móvil creado.');

        } else if (esVolador) {
            const alturaStr = await r1.question('Altura (m): ');
            const altura = Number(alturaStr);
            robots.push(new RobotVolador(modelo, altura));
            console.log('Robot volador creado.');

        } else {
            console.log('Tipo no válido. Escribe "movil" o "volador".');
        }
    }


    // 4. Mover todos 
    if (opcion === '4') {
        robots.forEach(r => r.mover?.());
    }

    // 5. Volar todos
    if (opcion === '5') {
        robots.forEach(r => r.volar?.());
    }

    // 6. Mostrar Robot por posición
    if (opcion === '6') {
        const posicionStr = await r1.question('Posición en el array: ');
        const posicion = Number(posicionStr);
        console.log(robots[posicion]?.toString() ?? `Robot no encontrado en la posición ${posicion}`);
    }

    if (!['0', '1', '2', '3', '4', '5', '6'].includes(opcion)) {
        console.log('Opción incorrecta.');
        console.clear();
    }
}

r1.close();