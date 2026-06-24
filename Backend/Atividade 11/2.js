const express = require('express');
const app = express();

app.get('/sobre', (req, res) => {
  res.send('Este projeto foi desenvolvido para praticar Node.js e Express.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});