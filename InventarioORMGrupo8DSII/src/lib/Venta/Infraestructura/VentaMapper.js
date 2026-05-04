const Venta = require("../Dominio/Entidad/Venta");

class VentaMapper {

    static toDomain(model) {
        return new Venta({
            id: model.id_venta,
            numeroVenta: model.numeroVenta,
            fechaVenta: model.fechaVenta,
            subtotal: parseFloat(model.subtotal),
            iva: parseFloat(model.iva),
            total: parseFloat(model.total),
            activo: model.activo,
            clienteId: model.id_cliente
        });
    }

    static toDomainWithClient(model) {
        return {
            id: model.id_venta,
            numeroVenta: model.numeroVenta,
            fechaVenta: model.fechaVenta,
            subtotal: parseFloat(model.subtotal),
            iva: parseFloat(model.iva),
            total: parseFloat(model.total),
            activo: model.activo,
            cliente: model.Cliente ? {
                identificacion: model.Cliente.identificacion,
                nombre: model.Cliente.nombre
            } : null
        };
    }

    static toPersistence(venta) {
        return {
            numeroVenta: venta.numeroVenta,
            fechaVenta: venta.fechaVenta,
            subtotal: venta.subtotal,
            iva: venta.iva,
            total: venta.total,
            activo: venta.activo,
            id_cliente: venta.clienteId
        };
    }
}

module.exports = VentaMapper;