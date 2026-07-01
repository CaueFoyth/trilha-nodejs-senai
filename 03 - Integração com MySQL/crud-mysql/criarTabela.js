// Cria a tabela de usuários (rode uma vez antes de usar o CRUD).
const pool = require("./db");

async function criarTabela() {
  const sql = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE,
      criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await pool.query(sql);
  console.log("Tabela 'usuarios' pronta.");
  await pool.end();
}

criarTabela().catch((erro) => {
  console.error("Erro ao criar tabela:", erro.message);
  process.exit(1);
});
