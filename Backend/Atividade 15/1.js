const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [
  { id: 1, nome: "Ana", email: "ana@escola.com" },
  { id: 2, nome: "Carlos", email: "carlos@escola.com" }
];

// Listar todos
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// Criar
app.post("/usuarios", (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
    email: req.body.email
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// Atualizar
app.put("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);

  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado" });
  }

  usuario.nome = req.body.nome;
  usuario.email = req.body.email;

  res.json(usuario);
});

// Excluir
app.delete("/usuarios/:id", (req, res) => {
  const id = Number(req.params.id);

  usuarios = usuarios.filter(u => u.id !== id);

  res.json({ mensagem: "Usuário removido" });
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});