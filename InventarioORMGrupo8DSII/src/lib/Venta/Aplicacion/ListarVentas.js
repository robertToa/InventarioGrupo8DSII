const Venta = require("../Dominio/Entidad/Venta");

class ListarVentas {
    constructor({ ventaRepository } ) {
        this.ventaRepository = ventaRepository;
    }

    async execute() {
        return await this.ventaRepository.findAll();
    }
}

module.exports = ListarVentas;