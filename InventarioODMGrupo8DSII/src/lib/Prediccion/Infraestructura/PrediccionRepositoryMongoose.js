const PrediccionModelo = require("./PrediccionModelo");
const PrediccionMapper = require("./PrediccionMapper");
const Prediccion = require("../Dominio/Entidad/Prediccion");

class PrediccionRepositoryMongo {

    async save(prediccion) {
        const data = PrediccionMapper.toPersistence(prediccion);
        const doc = await PrediccionModelo.create(data);
        return PrediccionMapper.toDomain(doc);
    }

    async findById(id) {
        const doc = await PrediccionModelo.findById(id).populate("producto")
        if (!doc) return null;
        return doc;
    }
}

module.exports = PrediccionRepositoryMongo;