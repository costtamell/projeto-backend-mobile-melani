app.delete("/usuarios/:id", (req, res) => {
    const id = Number(req.params.id);
  
    usuarios = usuarios.filter(u => u.id !== id);
  
    res.json({
      mensagem: "Usuário removido"
    });
  });