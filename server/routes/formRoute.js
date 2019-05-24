const express = require("express");
const formRoute = express.Router();
const formController = require("../controller/formController");

    formRoute.route("/add").post(formController.postForm);
    formRoute.route("/get").get(formController.getForm);
    formRoute.route("/update").put(formController.putList);
    formRoute.route("/delete").delete(formController.deleteList);

module.exports = formRoute;
