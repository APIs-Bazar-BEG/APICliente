// models/Producto.js
const db = require("../config/db");

const Producto = {
  // Función para obtener todos los productos de la base de datos
  getAll: async () => {
    const [rows] = await db.query("SELECT * FROM productos");
    return rows;
  },

  // Función para obtener un solo producto por su ID
  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM productos WHERE id = ?", [id]);
    return rows[0]; // Devuelve el primer resultado
  },
};

module.exports = Producto;
