// routes/productos.js
const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

// Endpoint para obtener todos los productos
router.get("/", productoController.listarProductos);

// Endpoint para obtener un producto por ID
router.get("/:id", productoController.obtenerProductoPorId);

module.exports = router;
