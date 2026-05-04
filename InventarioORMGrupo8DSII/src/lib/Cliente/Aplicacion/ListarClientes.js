const Cliente = require("../Dominio/Entidad/Cliente");

class ListarClientes {
    constructor({ clienteRepository } ) {
        this.clienteRepository = clienteRepository;
    }

    async execute() {
        return await this.clienteRepository.findAll();
    }
}

module.exports = ListarClientes;