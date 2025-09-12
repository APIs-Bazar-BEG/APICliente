const validarId = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "ID inválido" });
  }
  next();
};

const validarCategoriaId = (req, res, next) => {
  const { id_categoria } = req.query;
  if (!id_categoria || isNaN(Number(id_categoria))) {
    return res.status(400).json({ error: "ID de categoría inválido" });
  }
  next();
};

module.exports = { validarId, validarCategoriaId };
