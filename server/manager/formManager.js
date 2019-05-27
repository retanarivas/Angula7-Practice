const formDAO = require('../dao/formDAO');

var formManager = class formManager {
    constructor() {}
    
    getForm(req, res) {
        var FD = new formDAO();
        return FD.getForm(req, res);
    }

    oneForm(req, res) {
        var FD = new formDAO();
        return FD.oneForm(req, res);
    }

    postForm(req, res) {
        var FD = new formDAO();
        return FD.postForm(req, res);
    }

    putList(req, res) {
        var FD = new formDAO();
        return FD.putList(req, res);
    }

    deleteList(req, res) {
        var FD = new formDAO();
        return FD.deleteList(req, res);
    }
}

module.exports = formManager;