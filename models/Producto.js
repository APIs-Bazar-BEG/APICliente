const db = require("../config/db");

const Producto = {
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM productos");
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM productos WHERE id = ?", [id]);
    return rows[0];
  },

  getByCategoria: async (id_categoria) => {
    const [rows] = await db.query(
      "SELECT * FROM productos WHERE id_categoria = ?",
      [id_categoria]
    );
    return rows;
  },
};

module.exports = Producto;
