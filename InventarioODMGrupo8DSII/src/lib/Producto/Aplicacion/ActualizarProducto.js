class ActualizarProducto {
    constructor({ productoRepository }) {
        this.productoRepository = productoRepository;
    }

    async execute(data) {
        return await this.productoRepository.update(data);
    }
}

module.exports = ActualizarProducto;