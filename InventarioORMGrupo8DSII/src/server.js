const buildApp = require("./app");
const sequelize = require("./infraestuctura/database/SequelizeConextion");

async function start() {
    const port = Number(process.env.PORT) || 3977;

    await sequelize.authenticate();
    console.log("Conectado a la base de datos de mysql");

    const app = buildApp();
    app.listen(port, () => {
        console.log("Servidor esta corriendo correctamente en el puerto: " + port);
    });
}

start().catch((e) => {
    console.error("Fallo al iniciar la aplicación:", e);
    process.exit(1);
});