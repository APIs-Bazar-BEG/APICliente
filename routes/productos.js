// routes/productos.js
const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");
const {
  validarId,
  validarCategoriaId,
} = require("../middlewares/validaciones");

// Endpoint para obtener todos los productos
router.get("/", productoController.listarProductos);

// Filtrar por categoría
router.get(
  "/categoria",
  validarCategoriaId,
  productoController.listarPorCategoria
);

// Producto por ID
router.get("/:id", validarId, productoController.obtenerProductoPorId);

module.exports = router;
