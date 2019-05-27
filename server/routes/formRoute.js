const express = require("express");
const router = express.Router();
const formController = require("../controller/formController");

    router.get("/get", formController.getForm);
    router.get("/one/:id", formController.oneForm);
    router.post("/add", formController.postForm);
    router.put("/update/:id", formController.putList);
    router.delete("/delete/:id", formController.deleteList);

module.exports = router;
