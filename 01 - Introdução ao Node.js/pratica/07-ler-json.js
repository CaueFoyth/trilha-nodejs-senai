// Exercício 9 — lê um arquivo JSON com informações de um usuário.
const fs = require("fs");

const conteudo = fs.readFileSync("usuario.json", "utf-8");
const usuario = JSON.parse(conteudo);

console.log("Nome:", usuario.nome);
console.log("Idade:", usuario.idade);
console.log("Linguagens:", usuario.linguagens.join(", "));
