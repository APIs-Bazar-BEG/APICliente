const db = require("../config/db");

const Carrito = {
  // Agregar un producto al carrito
  agregarProducto: async (id_usuario, id_producto, cantidad) => {
    try {
      const [resultado] = await db.query(
        "INSERT INTO carritos (id_usuario, id_producto, cantidad) VALUES (?, ?, ?)",
        [id_usuario, id_producto, cantidad]
      );
      return resultado;
    } catch (error) {
      throw error;
    }
  },

  // Obtener productos del carrito por usuario
  obtenerCarrito: async (id_usuario) => {
    try {
      const [rows] = await db.query(
        `SELECT c.id, c.id_usuario, c.id_producto, c.cantidad, 
                p.nombre, p.descripcion, p.precio, p.url_imagen
         FROM carritos c
         INNER JOIN productos p ON c.id_producto = p.id
         WHERE c.id_usuario = ?`,
        [id_usuario]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Eliminar un producto del carrito
  eliminarProducto: async (id) => {
    try {
      const [resultado] = await db.query("DELETE FROM carritos WHERE id = ?", [
        id,
      ]);
      return resultado;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Carrito;
