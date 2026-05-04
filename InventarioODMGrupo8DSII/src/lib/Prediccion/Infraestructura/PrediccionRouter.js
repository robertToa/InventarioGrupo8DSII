const express = require("express");
const router = express.Router();

module.exports = (controller) => {
    router.post("/crear", controller.save);
    router.get("/:id", controller.findById);
    return router;
};