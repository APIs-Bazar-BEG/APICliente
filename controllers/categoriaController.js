const Categoria = require("../models/Categoria");

const categoriaController = {
  listarCategorias: async (req, res) => {
    try {
      const categorias = await Categoria.getAll();
      res.status(200).json(categorias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener las categorías" });
    }
  },

  productosPorCategoria: async (req, res) => {
    try {
      const { id } = req.params;
      const productos = await Categoria.getProductosPorCategoria(id);

      if (!productos || productos.length === 0) {
        return res
          .status(404)
          .json({ error: "No se encontraron productos para esta categoría" });
      }

      res.status(200).json(productos);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Error al obtener los productos por categoría" });
    }
  },
};

module.exports = categoriaController;
