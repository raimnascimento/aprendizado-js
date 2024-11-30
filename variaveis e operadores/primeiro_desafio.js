const valorCombustivel = 5.50;
const kmPorLitros = 10;
let distanciaKm = 100;

let kmPercorridos = distanciaKm / kmPorLitros;
let gastoTotal = kmPercorridos * valorCombustivel;

// toFixed - quantidade de números após a casa decimal
console.log(gastoTotal.toFixed(2));