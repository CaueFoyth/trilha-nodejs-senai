// Exercício 2 — cria e depois lê um arquivo usando o módulo fs.
const fs = require("fs");

fs.writeFile("saida.txt", "Texto gravado pelo Node.js.\n", (erro) => {
  if (erro) return console.error("Erro ao gravar:", erro.message);

  fs.readFile("saida.txt", "utf-8", (erro, conteudo) => {
    if (erro) return console.error("Erro ao ler:", erro.message);
    console.log("Conteudo lido:", conteudo.trim());
  });
});
