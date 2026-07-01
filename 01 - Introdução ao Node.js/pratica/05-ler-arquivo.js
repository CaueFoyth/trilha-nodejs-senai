// Exercício 6 — lê o arquivo texto.txt e exibe o conteúdo no console.
const fs = require("fs");

fs.readFile("texto.txt", "utf-8", (erro, conteudo) => {
  if (erro) {
    console.error("Nao foi possivel ler o arquivo:", erro.message);
    return;
  }
  console.log("Conteudo do arquivo:");
  console.log(conteudo);
});
