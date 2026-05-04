const Cliente = require("../Dominio/Entidad/Cliente");

class ObtenerClientePorId {
    constructor({ clienteRepository } ) {
        this.clienteRepository = clienteRepository;
    }

    async execute(id) {
        return await this.clienteRepository.findById(id);
    }
}

module.exports = ObtenerClientePorId;