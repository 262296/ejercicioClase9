// Programa que determina el tipo de triángulo según sus lados

let lado1 = parseFloat(prompt("Ingresa la longitud del primer lado:"));
let lado2 = parseFloat(prompt("Ingresa la longitud del segundo lado:"));
let lado3 = parseFloat(prompt("Ingresa la longitud del tercer lado:"));

if (lado1 === lado2 && lado2 === lado3) {
    alert("El triángulo es equilátero (todos los lados iguales).");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("El triángulo es isósceles (dos lados iguales).");
} else {
    alert("El triángulo es escaleno (todos los lados diferentes).");
}