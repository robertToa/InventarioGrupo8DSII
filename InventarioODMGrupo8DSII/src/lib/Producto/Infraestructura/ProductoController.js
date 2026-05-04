class ProductoController {
    constructor({ crearProducto , obtenerProductoPorId, actualizarproducto, eliminarProducto}) {
        this.crearProducto = crearProducto;
        this.obtenerProductoPorId = obtenerProductoPorId;
        this.actualizarproducto = actualizarproducto;
        this.eliminarProducto = eliminarProducto;
    }

    save = async (req, res) => {
        const producto = await this.crearProducto.execute(req.body);
        res.status(201).json(producto);
    };

    findById = async (req, res)  => {
        const id = req.params.id;
        const producto = await this.obtenerProductoPorId.execute(id);
        if (producto != null)
            res.json(producto);
        else
            res.status(404).json({ message: "Producto no encontrado" });
    }

    update = async (req, res) => {
        const productoUpdate = await this.actualizarproducto.execute(req.body);
        res.json(productoUpdate);
    };

    delete = async (req, res) => {
        const id = req.params.id;
        const deleteAffectedCount = await this.eliminarProducto.execute(id);
        if(deleteAffectedCount) 
            res.status(200).json({ message: "Producto eliminado" });
        else
            res.status(404).json({ message: "Producto no encontrado" });
    };
}

module.exports = ProductoController;