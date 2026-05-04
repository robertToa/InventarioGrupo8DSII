const { DataTypes } = require("sequelize");
const sequelize = require("../../../infraestuctura/database/SequelizeConextion");

const ClienteModel = sequelize.define("Cliente", {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    identificacion: DataTypes.STRING(15),
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefono: DataTypes.STRING(15),
    direccion: DataTypes.STRING(100),
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: "Cliente",
    timestamps: false
});

module.exports = ClienteModel;