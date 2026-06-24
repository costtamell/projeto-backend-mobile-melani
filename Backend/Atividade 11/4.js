const express = require('express');
const app = express();

app.get('/contato', (req, res) => {
  res.send('Para mais informações, entre em contato com nossa equipe.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});