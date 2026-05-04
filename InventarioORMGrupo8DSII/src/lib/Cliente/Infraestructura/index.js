const ClienteRouter = require("./ClienteRouter");
const ClienteController = require("./ClienteController");

const ClienteRepositorySequelize = require("./ClienteRepositorySequelize");

const CrearCliente = require("../Aplicacion/CrearCliente");
const ListarClientes = require("../Aplicacion/ListarClientes");
const ObtenerClientePorId = require("../Aplicacion/ObtenerClientePorId");
const ActualizarCliente = require("../Aplicacion/ActualizarCliente");
const EliminarCliente = require("../Aplicacion/EliminarCliente");


module.exports = function registerClienteModule(app) {
  const repo = new ClienteRepositorySequelize();

  const controller = new ClienteController({
    crearCliente: new CrearCliente({ clienteRepository: repo }),
    listarClientes: new ListarClientes({ clienteRepository: repo }), 
    obtenerClientePorId: new ObtenerClientePorId({ clienteRepository: repo }),
    actualizarCliente: new ActualizarCliente({ clienteRepository: repo }),
    eliminarCliente: new EliminarCliente({ clienteRepository: repo }),
  });

  app.use("/api/clientes", ClienteRouter(controller));
};