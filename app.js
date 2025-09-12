// app.js
const express = require("express");
const app = express();
const port = 3000;

// Importar el módulo de conexión a la base de datos
const db = require("./config/db");

// Importar las rutas
const productosRouter = require("./routes/productos");
const categoriasRouter = require("./routes/categorias");
const carritoRouter = require("./routes/carrito"); // ✅ Importación del carrito

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API del Cliente del Bazar en funcionamiento!");
});

// Usar las rutas
app.use("/api/v1/productos", productosRouter);
app.use("/api/v1/categorias", categoriasRouter);
app.use("/api/v1/carrito", carritoRouter); // ✅ Ahora sí definido

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
