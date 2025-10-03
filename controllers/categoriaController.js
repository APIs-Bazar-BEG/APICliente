const Categoria = require("../models/Categoria");
const axios = require("axios");
const ADMIN_API = process.env.ADMIN_API;

const categoriaController = {
  listarCategorias: async (req, res) => {
    try {
      const { data } = await axios.get(`${ADMIN_API}/categorias`);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener categorías" });
    }
  },

  productosPorCategoria: async (req, res) => {
    try {
      const { id } = req.params;
      const { data } = await axios.get(
        `${ADMIN_API}/categorias/${id}/productos`
      );
      res.json(data);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener productos por categoría" });
    }
  },
};

module.exports = categoriaController;
