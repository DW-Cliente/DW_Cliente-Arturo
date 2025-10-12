const p = document.getElementById("p1");
const boton = document.getElementById("boton");
const input = document.getElementById("i1");
const enlace = document.getElementById("a1");
const div = document.getElementById("div1");

boton.addEventListener('click', (e) => console.log(e));

function infoEvento(e) {
    console.log(`${e.type === 'click' ? 'Ratón' : 'Teclado'}`);
    if(e instanceof PointerEvent) {
        console.log(`Botón: ${e.button}. X: ${e.x} Y: ${e.y}`);
    } else {
        console.log(`Tecla: ${e.key}`);
    }
}

input.addEventListener('click', infoEvento);
input.addEventListener('keypress', infoEvento);

enlace.addEventListener('click', (e) => {
    console.log("Este enlace está bloqueado");
    e.preventDefault(); // Bloquea comportamiento enlace
});

div.addEventListener('click', e => {
    if(e.ctrlKey) {
        e.target.remove();
    } else {
        e.target.classList.toggle("selected");
    }
});
