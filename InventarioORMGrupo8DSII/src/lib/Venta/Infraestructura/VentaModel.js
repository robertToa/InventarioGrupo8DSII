const { DataTypes } = require("sequelize");
const sequelize = require("../../../infraestuctura/database/SequelizeConextion");

const VentaModel = sequelize.define("Venta", {
    id_venta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeroVenta: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fechaVenta: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    iva: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    }, {
        tableName: "Venta",
        timestamps: false
    });

module.exports = VentaModel;