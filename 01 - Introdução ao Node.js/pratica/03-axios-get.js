// Exercício 4 — usa o axios para fazer uma requisição GET a uma API.
// Requer: npm install axios
const axios = require("axios");

async function buscar() {
  try {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    console.log("Usuario recebido da API:", data.name, "-", data.email);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro.message);
  }
}

buscar();
