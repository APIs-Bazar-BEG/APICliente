const db = require("../config/db");

const Categoria = {
  // Obtener todas las categorías
  getAll: async () => {
    const [rows] = await db.query(
      "SELECT * FROM categorias ORDER BY fecha_creacion DESC"
    );
    return rows;
  },

  // Obtener productos por categoría
  getProductosPorCategoria: async (id_categoria) => {
    const [rows] = await db.query(
      `SELECT * FROM productos WHERE id_categoria = ? ORDER BY fecha_creacion DESC`,
      [id_categoria]
    );
    return rows;
  },
};

module.exports = Categoria;
