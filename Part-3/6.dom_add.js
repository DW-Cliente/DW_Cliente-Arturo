const lista = document.getElementById("lista1");
const input = document.getElementById("texto");
const inputPos = document.getElementById("pos");
const botonAppend = document.getElementById("append");
const botonPrepend = document.getElementById("prepend");
const botonBefore = document.getElementById("before");
const botonReplace = document.getElementById("replace");
const botonVacia = document.getElementById("empty");

botonAppend.addEventListener('click', () => {
    const li = document.createElement("li");
    li.append(input.value);
    lista.append(li);
});

botonPrepend.addEventListener('click', () => {
    const li = document.createElement("li");
    li.append(input.value);
    lista.prepend(li);
});

botonBefore.addEventListener('click', () => {
    const li = document.createElement("li");
    li.append(input.value);
    lista.children[inputPos.value-1].before(li);
});

botonReplace.addEventListener('click', () => {
    const li = document.createElement("li");
    li.append(input.value);
    lista.children[inputPos.value-1].replaceWith(li);
});

botonVacia.addEventListener('click', () => {
    lista.replaceChildren();
});