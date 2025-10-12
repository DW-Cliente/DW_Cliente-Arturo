setTimeout(() => console.log("Timeout acabado"), 3000);
console.log("Hola!");

let i = 0;
const intervalID = setInterval(() => {
    i++;
    console.log(i);
    if(i === 10) clearInterval(intervalID);
}, 1000)