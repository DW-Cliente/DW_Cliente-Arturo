// Mi consejo es no usar innerHTML NUNCA!
const textArea = document.getElementById("input");
const boton = document.getElementById("enviar");
const div = document.getElementById("d1");

boton.addEventListener("click", () => {
    div.innerHTML = textArea.value;
});