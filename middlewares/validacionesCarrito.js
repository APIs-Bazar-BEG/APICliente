const validarAgregarCarrito = (req, res, next) => {
  const { id_usuario, id_producto, cantidad } = req.body;

  if (!id_usuario || isNaN(Number(id_usuario))) {
    return res.status(400).json({ error: "id_usuario inválido o faltante" });
  }

  if (!id_producto || isNaN(Number(id_producto))) {
    return res.status(400).json({ error: "id_producto inválido o faltante" });
  }

  if (!cantidad || isNaN(Number(cantidad)) || Number(cantidad) <= 0) {
    return res.status(400).json({ error: "cantidad inválida o menor a 1" });
  }

  next();
};

const validarIdCarrito = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "ID del carrito inválido" });
  }
  next();
};

const validarIdUsuario = (req, res, next) => {
  const { id_usuario } = req.params;
  if (!id_usuario || isNaN(Number(id_usuario))) {
    return res.status(400).json({ error: "id_usuario inválido" });
  }
  next();
};

module.exports = { validarAgregarCarrito, validarIdCarrito, validarIdUsuario };
