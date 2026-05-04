const Cliente = require("../Dominio/Entidad/Cliente");

class EliminarCliente {
    constructor({ clienteRepository } ) {
        this.clienteRepository = clienteRepository;
    }

    async execute(id) {
        return await this.clienteRepository.delete(id);
    }
}

module.exports = EliminarCliente;