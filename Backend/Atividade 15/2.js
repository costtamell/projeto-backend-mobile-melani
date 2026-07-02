const express = require("express");
const app = express();

app.use(express.json());

let tarefas = [
  { id: 1, nome: "Estudar JavaScript" },
  { id: 2, nome: "Fazer exercícios" }
];

// Listar
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// Criar
app.post("/tarefas", (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    nome: req.body.nome
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

// Atualizar
app.put("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);

  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }

  tarefa.nome = req.body.nome;

  res.json(tarefa);
});

// Excluir
app.delete("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);

  tarefas = tarefas.filter(t => t.id !== id);

  res.json({ mensagem: "Tarefa removida" });
});

app.listen(3000, () => {
  console.log("Servidor rodando");
});