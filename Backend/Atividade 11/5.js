const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Página inicial do Sistema Escolar');
});

app.get('/sobre', (req, res) => {
  res.send('Informações sobre o projeto');
});

app.get('/contato', (req, res) => {
  res.send('Entre em contato conosco');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});