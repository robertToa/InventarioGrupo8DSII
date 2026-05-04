const buildApp = require("./app");
const {connection, disconnect} =  require("./Infraestructura/Database/DatabaseConexion")


async function start() {
    const port = 3977;

    await connection();
    
    const app = buildApp();
    
    app.listen(port, () => {
        console.log("Servidor esta corriendo correctamente en el puerto " + port);
    });
}

start().catch((ex) => {
    console.log("Fallo al iniciar la aplicacion", ex);
    process.exit(1);
});