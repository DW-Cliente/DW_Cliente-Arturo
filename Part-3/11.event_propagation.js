let divClick = function(event) {
    // eventPhase: 1 -> capture, 2 -> target (objetivo), 3 -> bubble
    console.log("Has pulsado: " + this.id + ". Fase: " + event.eventPhase);
    // event.stopPropagation(); // Para la propagación del evento
};

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let body = document.body;

body.addEventListener('click', divClick, true);
div1.addEventListener('click', divClick, true);
div2.addEventListener('click', divClick, true);
div3.addEventListener('click', divClick, true);