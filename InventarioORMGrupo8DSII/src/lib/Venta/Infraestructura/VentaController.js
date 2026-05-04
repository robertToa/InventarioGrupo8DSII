class VentaController {
    constructor({ crearVenta, obtenerVentaPorId, listarventas }) {
        this.crearVenta = crearVenta;
        this.obtenerVentaPorId = obtenerVentaPorId;
        this.listarventas = listarventas;
    }

    save = async (req, res) => {
        const venta = await this.crearVenta.execute(req.body);
        res.status(201).json(venta);
    };

    obtenerPorId = async (req, res) => {
        const id = req.params.id;
        const venta = await this.obtenerVentaPorId.execute(id);
        if (venta != null)
            res.json(venta);
        else
            res.status(404).json({ message: "Venta no encontrado" });
    };

    listar = async (req, res) => {
        const ventas = await this.listarventas.execute();
        res.json(ventas);
    };
}

module.exports = VentaController;
