class Producto {
    constructor({id,codigoProducto,nombre,descripcion,unidadMedida,activo,fechaCreacion}) {
        this.id = id;
        this.codigoProducto = codigoProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.unidadMedida = unidadMedida;
        this.activo = activo ?? true;
        this.fechaCreacion = fechaCreacion || new Date();

        this.validar();
    }

    validar() {
        if (!this.codigoProducto) throw new Error("Codigo del Producto es obligatorio");
        if (!this.nombre) throw new Error("Nombre del producto es obligatorio");
    }
}

module.exports = Producto;