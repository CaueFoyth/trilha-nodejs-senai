// Exemplo de transação: insere dois usuários; se algum falhar, desfaz tudo (rollback).
const pool = require("./db");

async function exemploTransacao() {
  const conexao = await pool.getConnection();
  try {
    await conexao.beginTransaction();

    await conexao.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", [
      "Ana",
      "ana@exemplo.com",
    ]);
    await conexao.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", [
      "Bruno",
      "bruno@exemplo.com",
    ]);

    await conexao.commit();
    console.log("Transacao concluida: os dois usuarios foram inseridos.");
  } catch (erro) {
    await conexao.rollback();
    console.error("Transacao desfeita (rollback):", erro.message);
  } finally {
    conexao.release();
    await pool.end();
  }
}

exemploTransacao();
