const express = require("express");
const router = express.Router();

module.exports = (controller) => {
    router.post("/save", controller.save);
    router.get("/listar", controller.listar);
    router.get("/:id", controller.obtenerPorId);
    return router;
};