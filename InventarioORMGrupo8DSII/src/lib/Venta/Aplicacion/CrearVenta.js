const Venta = require("../Dominio/Entidad/Venta");

class CrearVenta {
    constructor({ ventaRepository } ) {
        this.ventaRepository = ventaRepository;
    }

    async execute(data) {
        const venta = new Venta(data);
        return await this.ventaRepository.save(venta);
    }
}

module.exports = CrearVenta;