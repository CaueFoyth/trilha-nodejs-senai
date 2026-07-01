// Exercício 8 — stream Transform (um tipo de Duplex) que modifica dados durante o fluxo.
const { Transform } = require("stream");

const maiusculas = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

process.stdout.write("Entrada -> Saida (em maiusculas):\n");
maiusculas.pipe(process.stdout);

maiusculas.write("texto de exemplo\n");
maiusculas.write("processado por um stream duplex\n");
maiusculas.end();
