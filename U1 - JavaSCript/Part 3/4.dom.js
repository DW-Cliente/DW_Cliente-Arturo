const lista = document.getElementById("lista");

console.log(lista.firstChild);
console.log(lista.firstElementChild);

Array.from(lista.children).forEach(e => console.log(e));
Array.from(lista.childNodes).forEach(e => console.log(e));

console.log(lista.parentNode);

let li = lista.firstElementChild;
while(li) {
    console.log(li.textContent);
    li = li.nextElementSibling;
}

console.log(document.querySelector("#div1 a").title); // Imprime "hello world"
console.log(document.querySelector("#div1 > a")?.title); // ERROR: No hay un hijo inmediato dentro de <div id="div1"> el cual sea un enlace <a>
console.log(document.querySelector("#div1 > p > a").title); // Imprime "hello world"
console.log(document.querySelector(".normalLink[title^='bye']").title); // Imprime "bye world"
console.log(document.querySelector(".normalLink[title^='bye'] + a").title); // Imprime "hello again"

let elems = document.querySelectorAll(".normalLink");
elems.forEach(function(elem) { // Imprime "hello world" y "bye world"
    console.log(elem.title);
});

let elems2 = document.querySelectorAll("a[title^='hello']"); // Atributo title empieza por “hello...”
elems2.forEach(function(elem) { // Imprime "hello world" y "hello again"
    console.log(elem.title);
});


let elems3 = document.querySelectorAll("a[title='hello world'] ~ a"); // Hermanos de <a title="hello world">
elems3.forEach(function(elem) { // Imprime "bye world" y "hello again"
    console.log(elem.title);
});

// Enlace que no tiene la clase normalLink
console.log(document.querySelector("a:not(.normalLink)").title); // hello again