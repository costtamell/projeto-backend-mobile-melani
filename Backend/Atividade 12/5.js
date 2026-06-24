const express = require('express');
const app = express();

const turmas = [
  'Turma A',
  'Turma B',
  'Turma C'
];

app.get('/turmas', (req, res) => {
  res.json(turmas);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});