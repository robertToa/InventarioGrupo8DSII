const sequelize = require("./SequelizeConextion");
const ClienteModel = require("../../lib/Cliente/Infraestructura/ClienteModel");
const VentaModel = require("../../lib/Venta/Infraestructura/VentaModel");

ClienteModel.hasMany(VentaModel, {
  foreignKey: "id_cliente"
});

VentaModel.belongsTo(ClienteModel, {
  foreignKey: "id_cliente"
});

module.exports = {
    sequelize,
    ClienteModel,
    VentaModel
};