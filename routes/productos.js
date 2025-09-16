const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");
const { validarId } = require("../middlewares/validaciones");

router.get("/", async (req, res, next) => {
  const { categoria_id } = req.query;
  if (categoria_id) {
    return productoController.listarPorCategoria(req, res, next);
  }
  return productoController.listarProductos(req, res, next);
});

// Producto por ID
router.get("/:id", validarId, productoController.obtenerProductoPorId);

module.exports = router;
