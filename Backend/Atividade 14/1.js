const express = require("express");
const app = express();

app.use(express.json());

app.post("/avisos", (req, res) => {
  const novoAviso = req.body;

  res.status(201).json({
    mensagem: "Aviso recebido com sucesso",
    aviso: novoAviso
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});