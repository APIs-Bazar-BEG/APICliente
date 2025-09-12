const Carrito = require("../models/Carrito");

const carritoController = {
  agregarProducto: async (req, res) => {
    try {
      const { id_usuario, id_producto, cantidad } = req.body;

      if (!id_usuario || !id_producto || !cantidad) {
        return res
          .status(400)
          .json({ error: "Todos los campos son requeridos" });
      }

      await Carrito.agregarProducto(id_usuario, id_producto, cantidad);
      res
        .status(201)
        .json({ mensaje: "Producto agregado al carrito correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al agregar producto al carrito" });
    }
  },

  obtenerCarrito: async (req, res) => {
    try {
      const { id_usuario } = req.params;
      const carrito = await Carrito.obtenerCarrito(id_usuario);
      res.status(200).json(carrito);
    } catch (error) {
      console.error(error);
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
      console.error(error);
      res.status(500).json({ error: "Error al eliminar producto del carrito" });
    }
  },
};

module.exports = carritoController;
