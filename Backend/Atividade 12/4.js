const express = require('express');
const app = express();

app.get('/status', (req, res) => {
  res.json({
    mensagem: 'Sistema ativo'
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});