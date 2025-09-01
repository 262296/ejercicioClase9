// Calcula el área y perímetro de un círculo usando PI

const PI = 3.14159;
let radio = parseFloat(prompt("Ingresa el radio del círculo:"));

let area = PI * radio * radio;
let perimetro = 2 * PI * radio;

alert("El área del círculo es: " + area.toFixed(2));
alert("El perímetro del círculo es: " + perimetro.toFixed(2));