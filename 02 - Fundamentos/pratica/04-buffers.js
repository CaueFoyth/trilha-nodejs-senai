// Exercício 4 — usa Buffers para manipular uma string e convertê-la em dados binários.
const texto = "Node.js";

const buffer = Buffer.from(texto, "utf-8");

console.log("Texto original:", texto);
console.log("Em bytes (hex):", buffer.toString("hex"));
console.log("Em base64:", buffer.toString("base64"));
console.log("De volta para texto:", buffer.toString("utf-8"));
