// app.js
const express = require("express");
const app = express();
const port = 3000;

// Importar el módulo de conexión a la base de datos
const db = require("./config/db");

// Importar las rutas de productos
const productosRouter = require("./routes/productos");

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API del Cliente del Bazar en funcionamiento!");
});

// Usar las rutas de productos en el path '/api/v1/productos'
app.use("/api/v1/productos", productosRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
