const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/carritoController");

// Agregar producto al carrito
router.post("/", carritoController.agregarProducto);

// Obtener carrito por usuario
router.get("/:id_usuario", carritoController.obtenerCarrito);

// Eliminar producto del carrito
router.delete("/:id", carritoController.eliminarProducto);

module.exports = router;
