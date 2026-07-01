// Exercício 3 — usa um stream para processar um arquivo grande em blocos (chunks).
const fs = require("fs");

// Gera um arquivo grande de exemplo (100 mil linhas).
const nomeArquivo = "grande.txt";
const escrita = fs.createWriteStream(nomeArquivo);
for (let i = 1; i <= 100000; i++) {
  escrita.write(`Linha numero ${i}\n`);
}
escrita.end();

// Lê esse arquivo em blocos, sem carregar tudo na memória.
escrita.on("finish", () => {
  const leitura = fs.createReadStream(nomeArquivo, { encoding: "utf-8" });
  let totalBytes = 0;
  let blocos = 0;

  leitura.on("data", (chunk) => {
    totalBytes += chunk.length;
    blocos++;
  });

  leitura.on("end", () => {
    console.log(`Leitura concluida em ${blocos} blocos, ${totalBytes} caracteres.`);
  });

  leitura.on("error", (erro) => console.error("Erro no stream:", erro.message));
});
