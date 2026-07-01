// Demonstração do CRUD completo (Create, Read, Update, Delete).
const usuarios = require("./usuarios");
const pool = require("./db");

async function main() {
  try {
    const id = await usuarios.inserir("Cauê", "caue@exemplo.com");
    console.log("Criado usuario com id:", id);

    console.log("Todos os usuarios:", await usuarios.listar());

    await usuarios.atualizar(id, "Cauê Foyth", "caue@exemplo.com");
    console.log("Depois do update:", await usuarios.buscarPorId(id));

    await usuarios.deletar(id);
    console.log("Usuario removido.");
  } catch (erro) {
    console.error("Erro na operacao:", erro.message);
  } finally {
    await pool.end();
  }
}

main();
