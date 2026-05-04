const VentaRouter = require("./VentaRouter");
const VentaController = require("./VentaController");

const VentaRepositorySequelize = require("./VentaRepositorySequelize");

const CrearVenta = require("../Aplicacion/CrearVenta");
const ObtenerVentaPorId = require("../Aplicacion/ObtenerVentaPorId");
const ListarVentas = require("../Aplicacion/ListarVentas");


module.exports = function registerVentaModule(app) {
  const repo = new VentaRepositorySequelize();

  const controller = new VentaController({
    crearVenta: new CrearVenta({ ventaRepository: repo }), 
    obtenerVentaPorId: new ObtenerVentaPorId({ ventaRepository: repo }),
    listarventas: new ListarVentas({ ventaRepository: repo }),
  });

  app.use("/api/ventas", VentaRouter(controller));
};