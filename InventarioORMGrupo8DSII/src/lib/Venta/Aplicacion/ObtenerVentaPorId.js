const Venta = require("../Dominio/Entidad/Venta");

class ObtenerVentaPorId {
    constructor({ ventaRepository } ) {
        this.ventaRepository = ventaRepository;
    }

    async execute(id) {
        return await this.ventaRepository.findById(id);
    }
}

module.exports = ObtenerVentaPorId;