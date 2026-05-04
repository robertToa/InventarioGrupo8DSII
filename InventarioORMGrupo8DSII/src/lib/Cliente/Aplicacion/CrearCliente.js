const Cliente = require("../Dominio/Entidad/Cliente");

class CrearCliente {
    constructor({ clienteRepository } ) {
        this.clienteRepository = clienteRepository;
    }

    async execute(data) {
        const cliente = new Cliente(data);
        return await this.clienteRepository.save(cliente);
    }
}

module.exports = CrearCliente;