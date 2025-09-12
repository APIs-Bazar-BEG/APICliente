const Producto = require("../models/Producto");

const productoController = {
  // Lógica para listar todos los productos
  listarProductos: async (req, res) => {
    try {
      const productos = await Producto.getAll();
      res.json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  },

  // Lógica para obtener los detalles de un solo producto
  obtenerProductoPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await Producto.getById(id);
      if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      res.json(producto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener el producto" });
    }
  },
};

module.exports = productoController;
