const { VentaModel, ClienteModel } = require("../../../infraestuctura/database/SequelizeIndex");
const VentaMapper = require("./VentaMapper");

class VentaRepositorySequelize {
    async save(venta) {
        const data = VentaMapper.toPersistence(venta);
        const created = await VentaModel.create(data);
        return VentaMapper.toDomain(created);
    }

    async findById(id) {
        const venta = await VentaModel.findByPk(id, {
            include: [
                {
                    model: ClienteModel,
                    attributes: ["identificacion", "nombre"]
                }
            ]
        });
        if(venta===null)
            return null;
        return VentaMapper.toDomainWithClient(venta);
    }

    async findAll() {
        const ventas = await VentaModel.findAll({
            include: [
                {
                    model: ClienteModel,
                    attributes: ["identificacion", "nombre"]
                }
            ],
            where:{
                activo: true
            }
        });
        return ventas.map((venta) => VentaMapper.toDomainWithClient(venta));
    }
}

module.exports = VentaRepositorySequelize;