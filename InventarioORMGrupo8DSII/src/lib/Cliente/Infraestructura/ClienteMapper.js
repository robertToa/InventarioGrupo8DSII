const Cliente = require("../Dominio/Entidad/Cliente");

class ClienteMapper {

    static toDomain(model) {
        return new Cliente({
            id: model.id_cliente,
            identificacion: model.identificacion,
            nombre: model.nombre,
            email: model.email,
            telefono: model.telefono,
            direccion: model.direccion,
            activo: model.activo
        });
    }

    static toPersistence(cliente) {
        return {
            identificacion: cliente.identificacion,
            nombre: cliente.nombre,
            email: cliente.email,
            telefono: cliente.telefono,
            direccion: cliente.direccion,
            activo: cliente.activo
        };
    }
}

module.exports = ClienteMapper;