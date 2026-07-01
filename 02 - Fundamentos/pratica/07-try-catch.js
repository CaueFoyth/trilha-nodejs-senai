// Exercício 7 — usa try/catch para tratar erro ao acessar um arquivo inexistente.
const fs = require("fs");

try {
  const conteudo = fs.readFileSync("nao-existe.txt", "utf-8");
  console.log(conteudo);
} catch (erro) {
  console.error("Falha ao ler o arquivo:", erro.code, "-", erro.message);
}
