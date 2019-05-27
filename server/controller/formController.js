const formManager = require('../manager/formManager');
const controller = {};

controller.getForm = (req, res) => {
    var FM = new formManager();
    return FM.getForm(req, res);
};

controller.oneForm = (req, res) => {
    var FM = new formManager();
    return FM.oneForm(req, res);
}

controller.postForm = (req, res) => {
    var FM = new formManager();
    return FM.postForm(req, res);
};

controller.putList = (req, res) => {
    var FM = new formManager();
    return FM.putList(req, res);
};

controller.deleteList = (req, res) => {
    var FM = new formManager();
    return FM.deleteList(req, res);
};

module.exports = controller;
