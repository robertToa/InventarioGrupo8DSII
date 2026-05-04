class Venta {
    constructor({id,numeroVenta,fechaVenta,subtotal,iva,total,activo,clienteId}) {
        this.id = id || null;
        this.numeroVenta = numeroVenta;
        this.fechaVenta = fechaVenta || new Date();
        this.subtotal = subtotal || 0;
        this.iva = iva || 0;
        this.total = total || 0;
        this.activo = activo ?? true;
        this.clienteId = clienteId;

        this.validar();
    }

    validar() {
        if (!this.numeroVenta) throw new Error("numeroVenta es obligatorio");
        if (!this.clienteId) throw new Error("Cliente es obligatorio");
        if (this.total < 0) throw new Error("total no puede ser negativo");
    }
}

module.exports = Venta;