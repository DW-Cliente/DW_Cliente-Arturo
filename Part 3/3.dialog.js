document
  .getElementById("button1")
  .addEventListener("click", () => alert("Soy un alert!"));

document.getElementById("button2").addEventListener("click", () => {
  const resp = confirm("Estás aprendiendo JS?");
  if (resp) {
    document.getElementById("respConfirm").textContent = "Muy bien!";
  } else {
    document.getElementById("respConfirm").textContent = "Ponte las pilas";
  }
});

document.getElementById("button3").addEventListener("click", () => {
  const nombre = prompt("Cómo te llamas?");
  document.getElementById("respPrompt").textContent = nombre ?? "No lo canceles, hombre!";
});
