const Prediccion = require("../Dominio/Entidad/Prediccion");

class CrearPrediccion {
    constructor({ prediccionRepository } ) {
        this.prediccionRepository = prediccionRepository;
    }

    async execute(data) {
        const prediccion = new Prediccion(data);
        return await this.prediccionRepository.save(prediccion);
    }
}

module.exports = CrearPrediccion;