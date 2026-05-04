const { ClienteModel } = require("../../../infraestuctura/database/SequelizeIndex");
const ClienteMapper = require("./ClienteMapper");

class ClienteRepositorySequelize {
    async save(cliente) {
        const data = ClienteMapper.toPersistence(cliente);
        const created = await ClienteModel.create(data);
        return ClienteMapper.toDomain(created);
    }

    async findAll() {
        const clientes = await ClienteModel.findAll();
        return clientes.map((cliente) => ClienteMapper.toDomain(cliente));
    }

    async findById(id) {
        const cliente = await ClienteModel.findByPk(id);
        if(cliente===null)
            return null;
        return ClienteMapper.toDomain(cliente);
    }

    async update(cliente) {
        const [affectedRows] = await ClienteModel.update(cliente, {
            where: { id_cliente: cliente.id }
        });
        if (affectedRows === 0) return null;
        const clienteUpdated = await ClienteModel.findByPk(cliente.id);
        if(clienteUpdated===null)
            return null;
        return ClienteMapper.toDomain(clienteUpdated);
    }

    async delete(id) {
        const deleteClienteCount = await ClienteModel.destroy({
            where: { id_cliente: id }
        });
        return deleteClienteCount > 0 ; 
    }
}

module.exports = ClienteRepositorySequelize;