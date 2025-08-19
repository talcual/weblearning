
const express = require("express");
const app = express();

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Hola mundo desde Express!");
});

// Ruta dinámica
app.get("/saludo/:nombre", (req, res) => {
  res.send(`Hola, ${req.params.nombre}!`);
});

// Puerto de escucha
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});