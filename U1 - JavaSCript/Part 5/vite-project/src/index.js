import dayjs from 'dayjs';
import '../style.css'; // Podemos importar CSS directamente
import logo from '/1280-corsair-icue-4000x-rgb-cristal-templado-usb-31-rgb-negro.jpg'; // Podemos importar imágenes u otros activos'

const p = document.querySelector('p');
const img = document.createElement('img');
img.src = logo;
img.alt = 'Vite Logo';
img.width = 100;

p.appendChild(img);

import('dayjs/locale/es').then(() => {
  dayjs.locale('es');
  console.log(dayjs().format('DD MMMM YYYY')); // e.g., '25 enero 2019'
});
console.log(dayjs("2019-01-25").format("DD/MM/YYYY")); // '25/01/2019'

localStorage.hola = "Mundo";
