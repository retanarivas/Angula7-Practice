const formDAO = require('../dao/formDAO');

var formManager = class formManager {
    constructor() {}
    
    getForm() {
        var FD = new formDAO();
        console.log('get manager works');
        return FD.getForm();
    }

    postForm(data) {
        var FD = new formDAO();
        console.log('post manager works');
        return FD.postForm(data);
    }

    putList() {
        var FD = new formDAO();
        console.log('put manager works');
        return FD.putList();
    }

    deleteList() {
        var FD = new formDAO();
        console.log('delete manager works');
        return FD.deleteList();
    }
}

module.exports = formManager;