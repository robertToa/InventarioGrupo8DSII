class ObtenerProductoById {
  constructor({ productoRepository }) {
    this.productoRepository = productoRepository;
  }

  async execute(id) {
    return await this.productoRepository.findById(id);
  }
}

module.exports = ObtenerProductoById;