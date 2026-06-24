const express = require('express');
const app = express();

app.get('/equipe', (req, res) => {
  res.send('Grupo responsável pelo desenvolvimento do Sistema Escolar.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});