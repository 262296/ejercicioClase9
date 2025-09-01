// Ejercicio 2
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;
let numero = Number(prompt("Ingrese un número para verificar el rango:"));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango.");
} else {
    console.log("El número está fuera del rango.");
}
