// Exercício 7 — função que usa callback para somar dois números.
function somar(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

somar(7, 5, (total) => {
  console.log("A soma e:", total);
});
