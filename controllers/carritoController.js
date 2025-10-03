const Carrito = require("../models/Carrito");
const axios = require("axios");
const ADMIN_API = process.env.ADMIN_API;

const carritoController = {
  agregarProducto: async (req, res) => {
    try {
      const { id_usuario, id_producto, cantidad } = req.body;
      await Carrito.agregarProducto(id_usuario, id_producto, cantidad);
      res
        .status(201)
        .json({ mensaje: "Producto agregado al carrito correctamente" });
    } catch (error) {
      console.error("Error en agregarProducto:", error.message);
      res.status(500).json({ error: "Error al agregar producto al carrito" });
    }
  },

  obtenerCarrito: async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const carrito = await Carrito.obtenerCarrito(id_usuario);

      if (!carrito || carrito.length === 0) {
        return res
          .status(404)
          .json({ error: "No se encontraron productos en el carrito" });
      }

      res.status(200).json(carrito);
    } catch (error) {
      console.error("Error en obtenerCarrito:", error.message);
      res.status(500).json({ error: "Error al obtener el carrito" });
    }
  },

  eliminarProducto: async (req, res) => {
    try {
      const { id } = req.params;
      await Carrito.eliminarProducto(id);
      res
        .status(200)
        .json({ mensaje: "Producto eliminado del carrito correctamente" });
    } catch (error) {
      console.error("Error en eliminarProducto:", error.message);
      res.status(500).json({ error: "Error al eliminar producto del carrito" });
    }
  },
};

module.exports = carritoController;
