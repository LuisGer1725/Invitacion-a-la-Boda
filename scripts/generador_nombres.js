// script_main_invitados.js

// Obtener la cadena de consulta (query string) de la URL actual
const urlNonParsed = window.location.search;

// Crear un objeto URLSearchParams para analizar la cadena de consulta
const urlParsed = new URLSearchParams(urlNonParsed);

// Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

    // Variables para obtener valores de la cadena de consulta
    var apellidos = urlParsed.get('a'); // Obtener el valor asociado a la clave 'a' en la cadena de consulta
    var boletos = urlParsed.get('b');   // Obtener el valor asociado a la clave 'b' en la cadena de consulta

    // Frases dinámicas basadas en los valores obtenidos de la cadena de consulta
    const frase1 = `Con la bendición de Dios y de nuestros padres tenemos el honor de invitar a la familia ${apellidos} a ser testigos de nuestro enlace matrimonial.`;
    const frase2 = `Cantidad de entradas:\n ${boletos} boletos.`;
    

    // Actualizar el contenido de las frases en el HTML
    document.getElementById('invitados-frase1').innerText = frase1; // Actualizar el contenido de un elemento con el ID 'invitados-frase1'
    document.getElementById('invitados-frase2').innerText = frase2; // Actualizar el contenido de un elemento con el ID 'invitados-frase2'
});