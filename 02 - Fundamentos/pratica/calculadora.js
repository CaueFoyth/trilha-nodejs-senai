// Exercício 5 — módulo CommonJS que exporta funções simples.
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

module.exports = { somar, subtrair };
