const regFecha = /\b\d{2}\/\d{2}\/(\d{2}|\d{4})\b/g;
const texto =
  "Hoy es 25/06/2026, y yo nací el 04/05/70 y mi hermano el 05/11/88";
const fechas = texto.match(regFecha);
console.log(fechas); //  ['25/06/20', '04/05/70', '05/11/88']

const textoGuay = texto.replace(regFecha, (fecha) => {
  const [dia, mes, anyo] = fecha.split("/");
  const d = new Date(`${mes}/${dia}/${anyo}`);
  const formatter = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
  });
  return formatter.format(d);
});

console.log(textoGuay);