const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

// Listar todas las categorías
router.get("/", categoriaController.listarCategorias);

// Listar productos por categoría
router.get("/:id/productos", categoriaController.productosPorCategoria);

module.exports = router;
