const express = require("express");
const cors = require("cors");
const registerClienteModule = require("./lib/Cliente/Infraestructura/index");
const registerVentaModule = require("./lib/Venta/Infraestructura/index");


function buildApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  registerClienteModule(app);
  registerVentaModule(app);

  app.use((req, res) => res.status(404).json({ message: "Ruta no encontrada" }));

  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      message: err.message || "Error interno del servidor",
    });
  });
  return app;
}

module.exports = buildApp;