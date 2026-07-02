const express = require("express");
const app = express();

app.use(express.json());

app.post("/tarefas", (req, res) => {
  const novaTarefa = req.body;

  res.status(201).json({
    mensagem: "Tarefa recebida com sucesso",
    tarefa: novaTarefa
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});