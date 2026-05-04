const ProductoRouter = require("./ProductoRouter");
const ProductoController = require("./ProductoController");

const ProductoRepositoryMongo = require("./ProductoRepositoryMongoose");

const CrearProducto = require("../Aplicacion/CrearProducto");
const ActualizarProducto = require("../Aplicacion/ActualizarProducto");
const EliminarProducto = require("../Aplicacion/EliminarProducto");
const ObtenerProductoById = require("../Aplicacion/ObtenerProductoById");


module.exports = function registerProductoModule(app) {
  const repo = new ProductoRepositoryMongo();

  const controller = new ProductoController({
    crearProducto: new CrearProducto({ productoRepository: repo }),
    obtenerProductoPorId: new ObtenerProductoById({ productoRepository: repo }),
    actualizarproducto: new ActualizarProducto({ productoRepository: repo }),
    eliminarProducto: new EliminarProducto({ productoRepository: repo }),
  });

  app.use("/api/productos", ProductoRouter(controller));
};