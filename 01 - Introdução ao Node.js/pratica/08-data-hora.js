// Exercício 10 — exibe a data e a hora atuais formatadas.
const agora = new Date();

const dataFormatada = agora.toLocaleString("pt-BR", {
  dateStyle: "short",
  timeStyle: "medium",
});

console.log("Data e hora atuais:", dataFormatada);
