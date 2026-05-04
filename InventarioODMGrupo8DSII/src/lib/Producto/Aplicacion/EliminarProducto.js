class EliminarProducto {
  constructor({ productoRepository }) {
    this.productoRepository = productoRepository;
  }

  async execute(id) {
    return await this.productoRepository.delete(id);
  }
}

module.exports = EliminarProducto;