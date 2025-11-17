/* EJERCICIO 1
Objetivo: Muestra un mensaje letra por letra en un elemento del HTML, con un pequeño retardo entre cada letra.
 */
const writerElement = document.getElementById('writer');
const message = "Hola, soy un mensaje que se escribe solo.";


/* EJERCICIO 2
Crea un botón que, al ser pulsado, inicie una cuenta atrás de 5 segundos para mostrar una alerta. 
Si el usuario vuelve a pulsar el botón antes de que pasen los 5 segundos, la cuenta atrás se cancela.
*/
const actionBtn = document.getElementById('actionBtn');
const statusP = document.getElementById('status');

actionBtn.addEventListener('click', function() {
  
});


/* EJERCICIO 3
Crear una función que acepte un nombre de usuario y un rol (por ejemplo, "Admin", "Editor"). 
Después de 4 segundos, esta función debe mostrar un mensaje de bienvenida personalizado en la 
consola que incluya ambos datos.
 */