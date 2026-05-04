const Cliente = require("../Dominio/Entidad/Cliente");

class ActualizarCliente {
    constructor({ clienteRepository } ) {
        this.clienteRepository = clienteRepository;
    }

    async execute(data) {
        const cliente = new Cliente(data);
        return await this.clienteRepository.update(cliente);
    }
}

module.exports = ActualizarCliente;