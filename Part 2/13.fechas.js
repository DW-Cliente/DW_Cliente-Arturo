const hoy = new Date();
console.log(hoy); // Mon Sep 29 2025 11:27:07 GMT+0200 (hora de verano de Europa central)
hoy.setMonth(-1); // 1 mes antes que el año actual (diciembre 2024)
console.log(hoy); // Sun Dec 29 2024 11:27:41 GMT+0100 (hora estándar de Europa central)
hoy.setMonth(-24); // 24 meses antes que el 2024 
console.log(hoy);  // Sat Jan 29 2022 11:28:54 GMT+0100 (hora estándar de Europa central)

const fecha = new Date("2025-10-02");
console.log(fecha); // Thu Oct 02 2025 02:00:00 GMT+0200
fecha.setMonth(fecha.getMonth() - 5); // Restamos 5 meses
console.log(fecha); // Fri May 02 2025 02:00:00 GMT+0200
console.log(fecha.getDay()); // 5 (viernes)
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log(dias[fecha.getDay()]);