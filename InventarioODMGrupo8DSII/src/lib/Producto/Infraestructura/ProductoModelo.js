const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    codigoProducto: String,
    nombre: String,
    descripcion: String,
    unidadMedida: String,
    activo: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Producto", ProductoSchema);