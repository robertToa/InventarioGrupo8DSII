const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "INVENTARIO_BD",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "Av123456",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;