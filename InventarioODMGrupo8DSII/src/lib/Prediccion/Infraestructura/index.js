const PrediccionRouter = require("./PrediccionRouter");
const PrediccionController = require("./PrediccionController");

const PrediccionRepositoryMongoose = require("./PrediccionRepositoryMongoose");

const CrearPrediccion = require("../Aplicacion/CrearPrediccion");
const ObtenerPredccionPorId = require("../Aplicacion/ObtenerPredccionPorId");


module.exports = function registerPrediccionModule(app) {
  const repo = new PrediccionRepositoryMongoose();

  const controller = new PrediccionController({
    crearPrediccion: new CrearPrediccion({ prediccionRepository: repo }),
    obtenerPrediccionPorId: new ObtenerPredccionPorId({ prediccionRepository: repo }),
  });

  app.use("/api/prediccion", PrediccionRouter(controller));
};