const formManager = require('../manager/formManager');

exports.getForm = (req, res) => {
    var FM = new formManager();
    console.log("get form controller work");
    res.json(req.params);
    return FM.getForm();
};

exports.postForm = (req, res) => {
    var FM = new formManager();
    console.log("post controller work");
    res.json(req.body);
    return FM.postForm(req.body);
};

exports.putList = (req, res) => {
    var FM = new formManager();
    console.log("put controller work");
    res.json({text: 'actualizando formulario'});
    return FM.putList();
};

exports.deleteList = (req, res) => {
    var FM = new formManager();
    console.log("delete controller work");
    res.json({text: 'eliminando formulario'});
    return FM.deleteList();
};

