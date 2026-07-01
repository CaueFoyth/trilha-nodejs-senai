# Módulo 03 — CRUD com MySQL

Aplicação Node.js + MySQL com operações CRUD, usando **pool de conexões**, **prepared statements** (proteção contra SQL Injection), **variáveis de ambiente** (dotenv) e **código separado em módulos**.

## Como rodar

```bash
npm install
cp .env.example .env   # ajuste usuário/senha/banco
npm run criar-tabela   # cria a tabela usuarios
npm start              # roda a demonstração do CRUD
```

## Estrutura (código em módulos)

| Arquivo | Responsabilidade |
| --- | --- |
| `db.js` | Conexão em pool com o MySQL (via dotenv) |
| `criarTabela.js` | Cria a tabela `usuarios` |
| `usuarios.js` | Model: inserir, listar, buscarPorId, atualizar, deletar |
| `transacao.js` | Exemplo de transação (commit/rollback) |
| `index.js` | Demonstração do CRUD completo |

## Conceitos da apostila cobertos

- Conexão assíncrona com `mysql2/promise` e `async/await`
- CRUD completo (Create, Read, Update, Delete)
- Prepared statements (`?`) contra SQL Injection
- Pool de conexões
- Variáveis de ambiente com dotenv
- Transações (beginTransaction / commit / rollback)
- Organização do código em módulos reutilizáveis
