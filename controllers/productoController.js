const Producto = require("../models/Producto");
const axios = require("axios");
const ADMIN_API = process.env.ADMIN_API;

const productoController = {
  listarProductos: async (req, res) => {
    try {
      const { data } = await axios.get(`${ADMIN_API}/productos`);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  },

  listarPorCategoria: async (req, res) => {
    try {
      const { categoria_id } = req.query;
      const { data } = await axios.get(
        `${ADMIN_API}/productos/categoria/${categoria_id}`
      );
      res.json(data);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener productos por categoría" });
    }
  },

  obtenerProductoPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await axios.get(`${ADMIN_API}/productos/${id}`);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el producto" });
    }
  },
};

module.exports = productoController;
