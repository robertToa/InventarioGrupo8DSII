const express = require("express");
const cors = require("cors");
const registerProductoModule = require("./lib/Producto/Infraestructura/index");
const registerPrediccionModule = require("./lib/Prediccion/Infraestructura/index");

function buildApp(){
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    registerProductoModule(app);
    registerPrediccionModule(app);

    app.use((req, res) => res.status(404).json({ message: "Ruta no encontrada"}));
    app.use((err, req, res, next) => {
        res.status(err.status || 500).json({
            message: err.message || "Error interno del servidor"
        })
    });
    return app;
}

module.exports = buildApp;