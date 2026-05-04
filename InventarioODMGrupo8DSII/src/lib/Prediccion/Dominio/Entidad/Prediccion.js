class Prediccion {
    constructor({id,productoId,horizonteDias,stockActual}) {
        this.id = id;
        this.productoId = productoId;
        this.horizonteDias = horizonteDias;
        this.stockActual = stockActual;

        this.validar();
    }

    validar() {
        if (!this.productoId) throw new Error("productoId es obligatorio");
        if (this.stockActual < 0) throw new Error("stockActual no puede ser negativo");
        if (this.horizonteDias < 0) throw new Error("horizonteDias no puede ser negativo");
    }
}

module.exports = Prediccion;