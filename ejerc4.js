// Ejercicio 4: Verificar si el nombre ingresado es igual al tuyo

let miNombre = "Jesica"; // Cambia esto por tu nombre si lo deseas
let nombre = prompt("Por favor, ingresa tu nombre:");

if (nombre === miNombre) {
    alert("¡Hola " + nombre + "! Tu nombre es igual al mío.");
} else {
    alert("Hola " + nombre + ". Tu nombre es diferente al mío.");
}