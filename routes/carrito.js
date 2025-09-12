const express = require("express");
const router = express.Router();
const carritoController = require("../controllers/carritoController");
const {
  validarAgregarCarrito,
  validarIdCarrito,
  validarIdUsuario,
} = require("../middlewares/validacionesCarrito");

// Agregar producto al carrito
router.post("/", validarAgregarCarrito, carritoController.agregarProducto);

// Obtener carrito por usuario
router.get("/:id_usuario", validarIdUsuario, carritoController.obtenerCarrito);

// Eliminar producto del carrito
router.delete("/:id", validarIdCarrito, carritoController.eliminarProducto);

module.exports = router;
