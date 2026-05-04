class PrediccionController {
    constructor({ crearPrediccion, obtenerPrediccionPorId }) {
        this.crearPrediccion = crearPrediccion;
        this.obtenerPrediccionPorId = obtenerPrediccionPorId;
    }

    save = async (req, res) => {
        const prediccion = await this.crearPrediccion.execute(req.body);
        res.status(201).json(prediccion);
    };

    findById = async (req, res) => {
        const id = req.params.id;
        const prediccion = await this.obtenerPrediccionPorId.execute(id);
        if (prediccion != null)
            res.json(prediccion);
        else
            res.status(404).json({ message: "Prediccion no encontrado" });
    };
}

module.exports = PrediccionController;