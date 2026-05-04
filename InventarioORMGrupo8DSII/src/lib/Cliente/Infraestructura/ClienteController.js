class ClienteController {
    constructor({ crearCliente, listarClientes, obtenerClientePorId, actualizarCliente, eliminarCliente }) {
        this.crearCliente = crearCliente;
        this.listarClientes = listarClientes;
        this.obtenerClientePorId = obtenerClientePorId;
        this.actualizarCliente = actualizarCliente;
        this.eliminarCliente = eliminarCliente;
    }

    save = async (req, res) => {
        const cliente = await this.crearCliente.execute(req.body);
        res.status(201).json(cliente);
    };

    listar = async (req, res) => {
        const clientes = await this.listarClientes.execute();
        res.json(clientes);
    };

    obtenerPorId = async (req, res) => {
        const id = req.params.id;
        const cliente = await this.obtenerClientePorId.execute(id);
        if (cliente != null)
            res.json(cliente);
        else
            res.status(404).json({ message: "Cliente no encontrado" });
    };

    actualizar = async (req, res) => {
        const clienteUpdate = await this.actualizarCliente.execute(req.body);
        res.json(clienteUpdate);
    };

    eliminar = async (req, res) => {
        const id = req.params.id;
        const clienteAffectedCount = await this.eliminarCliente.execute(id);
        if(clienteAffectedCount) 
            res.status(200).json({ message: "Cliente eliminado" });
        else
            res.status(404).json({ message: "Cliente no encontrado" });
    };
}

module.exports = ClienteController;