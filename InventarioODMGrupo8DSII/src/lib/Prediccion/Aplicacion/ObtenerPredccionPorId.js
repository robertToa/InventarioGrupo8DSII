class ObtenerPrediccionPorId {
    constructor({ prediccionRepository } ) {
        this.prediccionRepository = prediccionRepository;
    }

    async execute(id) {
        return await this.prediccionRepository.findById(id);
    }
}

module.exports = ObtenerPrediccionPorId;