const ProductoModel = require("./ProductoModelo");
const Producto = require("../Dominio/Entidad/Producto");

class ProductoRepositoryMongo {

    async save(producto) {
        const doc = await ProductoModel.create({
            codigoProducto: producto.codigoProducto,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            unidadMedida: producto.unidadMedida,
            activo: producto.activo,
            fechaCreacion: producto.fechaCreacion
        });

        return new Producto({
            id: doc._id,
            ...doc.toObject()
        });
    }

    async findById(id) {
        const doc = await ProductoModel.findById(id);
        if (!doc) return null;
        return new Producto({
            id: doc._id,
            ...doc.toObject()
        });
    }

    async update(producto) {
        const doc = await ProductoModel.findByIdAndUpdate(producto.id, {
                codigoProducto: producto.codigoProducto,
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                unidadMedida: producto.unidadMedida,
                activo: producto.activo
            },
            { new: true } 
        );

        if (!doc) return null;

        return new Producto({
            id: doc._id,
            ...doc.toObject()
        });
    }

    async delete(id) {
        const doc = await ProductoModel.findByIdAndDelete(id);
        return doc ? true : false;
    }
}

module.exports = ProductoRepositoryMongo;