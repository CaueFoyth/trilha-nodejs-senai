// Exercício 6 — configura e lê um arquivo JSON usando o módulo fs.
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json", "utf-8"));

console.log("App:", config.appName, "v" + config.versao);
console.log("Porta configurada:", config.porta);
console.log("Modo debug:", config.debug ? "ativado" : "desativado");
