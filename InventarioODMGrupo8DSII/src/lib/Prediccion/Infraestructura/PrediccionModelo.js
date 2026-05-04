const mongoose = require("mongoose");

const PrediccionSchema = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
        required: true
    },
    horizonte_dias: {
        type: Number,
        required: true
    },
    stock_actual: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Prediccion", PrediccionSchema);