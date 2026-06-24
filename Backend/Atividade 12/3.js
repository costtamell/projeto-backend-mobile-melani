const express = require('express');
const app = express();

const reservas = [
  'Laoratório 2 - 3T',
  'Tablets - 2A',
  'Laboratório 1 - 1B'
];

app.get('/reservas', (req, res) => {
  res.json(reservas);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});