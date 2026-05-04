const express = require("express");
const router = express.Router();

module.exports = (controller) => {
    router.post("/crear", controller.save);
    router.put("/actualizar", controller.update);
    router.get("/:id", controller.findById);
    router.delete("/:id", controller.delete);
    return router;
};