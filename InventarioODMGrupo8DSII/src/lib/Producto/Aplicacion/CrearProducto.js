class CrearProducto {
    constructor({ productoRepository }) {
        this.productoRepository = productoRepository;
    }

    async execute(data) {
        return await this.productoRepository.save(data);
    }
}

module.exports = CrearProducto;