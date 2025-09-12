const Producto = require("../models/Producto");

const productoController = {
  listarProductos: async (req, res) => {
    try {
      const productos = await Producto.getAll();
      res.json(productos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  },

  obtenerProductoPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await Producto.getById(id);
      if (!producto)
        return res.status(404).json({ error: "Producto no encontrado" });
      res.json(producto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener el producto" });
    }
  },

  listarPorCategoria: async (req, res) => {
    try {
      const { id_categoria } = req.query;
      const productos = await Producto.getByCategoria(id_categoria);
      if (!productos || productos.length === 0) {
        return res
          .status(404)
          .json({ error: "No hay productos en esta categoría" });
      }
      res.json(productos);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error al obtener productos por categoría" });
    }
  },
};

module.exports = productoController;
