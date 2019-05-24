const dbConection = require('../config/dbConection');

var formDAO = class formDAO {
    constructor() {}

    getForm() {
        var formularios = [];
        dbConection.query('SELECT * FROM formulario', 
            (error, rows) => {
            if(error) {
                console.log('query error');
            } else {
                console.log('peticion correcta', rows);
            }
        });
    }

    postForm(data) {
        dbConection.query(`INSERT INTO formulario VALUES (null,'${data.name}','${data.secondName}','${data.region}','${data.description}','${data.img}')`, 
            (error, rows) => {
            if(error) {
                console.log('query error');
            } else {
                console.log('Insertion correct');
            }
        });
    }

    putList() {
        console.log('falta consulta put');
    }

    deleteList() {
        /* dbConection.query(`DELETE FROM formulario WHERE id = ?`,[id], 
            (error, rows) => {
            if(error) {
                console.log('query error');
            } else {
                console.log('Insertion correct');
            }
        }); */
    }
}
module.exports = formDAO;
