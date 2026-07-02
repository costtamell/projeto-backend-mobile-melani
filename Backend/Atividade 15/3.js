app.patch("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);
  
    const usuario = usuarios.find(u => u.id === id);
  
    if (!usuario) {
      return res.status(404).json({
        mensagem: "Usuário não encontrado"
      });
    }
  
    usuario.nome = req.body.nome;
  
    res.json(usuario);
  });