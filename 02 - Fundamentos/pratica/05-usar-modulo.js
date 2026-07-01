// Exercício 5 — importa e usa o módulo CommonJS calculadora.js.
const { somar, subtrair } = require("./calculadora");

console.log("10 + 4 =", somar(10, 4));
console.log("10 - 4 =", subtrair(10, 4));
