const express = require('express');
const app = express();

const tarefas = [
  'Estudar',
  'Fazer exercícios',
  'Entregar trabalho'
];

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});