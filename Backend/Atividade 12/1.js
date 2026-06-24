const express = require('express');
const app = express();

const usuarios = [
  'João',
  'Maria',
  'Pedro'
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});