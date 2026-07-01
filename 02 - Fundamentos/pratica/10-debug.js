// Exercício 10 — script simples para praticar debug com o inspetor do Node.
// Rode com: node --inspect-brk 10-debug.js  e abra chrome://inspect no navegador.
function fatorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado = resultado * i; // coloque um breakpoint nesta linha
  }
  return resultado;
}

const numero = 5;
console.log(`Fatorial de ${numero} =`, fatorial(numero));
