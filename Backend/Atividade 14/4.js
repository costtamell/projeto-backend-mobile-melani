const express = require("express");
const app = express();

app.use(express.json());

app.post("/reservas", (req, res) => {
  const novaReserva = req.body;

  res.status(201).json({
    mensagem: "Reserva recebida com sucesso",
    reserva: novaReserva
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});