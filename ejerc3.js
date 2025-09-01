// Ejercicio 3
let condicion1 = prompt("Ingrese el primer valor booleano (true/false):") === "true";
let condicion2 = prompt("Ingrese el segundo valor booleano (true/false):") === "true";

console.log("condicion1 AND condicion2:", condicion1 && condicion2);
console.log("condicion1 OR condicion2:", condicion1 || condicion2);
console.log("NOT condicion1:", !condicion1);
console.log("NOT condicion2:", !condicion2);