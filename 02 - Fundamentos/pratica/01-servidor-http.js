// Exercício 1 — servidor HTTP que responde "Bem-vindo ao Node.js!".
const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Bem-vindo ao Node.js!");
});

servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
