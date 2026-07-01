// Exercício 9 — servidor HTTP que responde de forma diferente para cada rota.
const http = require("http");

const servidor = http.createServer((req, res) => {
  const headers = { "Content-Type": "text/plain; charset=utf-8" };

  if (req.url === "/") {
    res.writeHead(200, headers);
    res.end("Pagina inicial");
  } else if (req.url === "/sobre") {
    res.writeHead(200, headers);
    res.end("Sobre o projeto");
  } else if (req.url === "/contato") {
    res.writeHead(200, headers);
    res.end("Fale conosco");
  } else {
    res.writeHead(404, headers);
    res.end("Pagina nao encontrada");
  }
});

servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
