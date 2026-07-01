// Model de usuários — todas as consultas usam prepared statements (?), evitando SQL Injection.
const pool = require("./db");

async function inserir(nome, email) {
  const [resultado] = await pool.execute(
    "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
    [nome, email]
  );
  return resultado.insertId;
}

async function listar() {
  const [linhas] = await pool.query("SELECT * FROM usuarios");
  return linhas;
}

async function buscarPorId(id) {
  const [linhas] = await pool.execute("SELECT * FROM usuarios WHERE id = ?", [id]);
  return linhas[0];
}

async function atualizar(id, nome, email) {
  const [resultado] = await pool.execute(
    "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
    [nome, email, id]
  );
  return resultado.affectedRows;
}

async function deletar(id) {
  const [resultado] = await pool.execute("DELETE FROM usuarios WHERE id = ?", [id]);
  return resultado.affectedRows;
}

module.exports = { inserir, listar, buscarPorId, atualizar, deletar };
