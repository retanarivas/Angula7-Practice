const dbConection = require('../config/dbConection');

var formDAO = class formDAO {
    constructor() {}

    async getForm(req, res) {
        var query = 'SELECT * FROM formulario';
        await dbConection.query(query, (error, rows) => {
            res.json(rows);
        });
    };

    async oneForm(req, res) {
        const id = req.params.id;
        const query = `SELECT * FROM formulario WHERE id = ${id}`;
        await dbConection.query(query, (error, rows) => {
            if(rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.status(404).json({text: "The plant dosen't exist"})
            }
        });
    };

    async postForm(req, res) {
        var data = req.body;
        var query = `INSERT INTO formulario VALUES (null,'${data.name}','${data.secondName}','${data.region}','${data.description}','${data.img}')`;
        await dbConection.query(query, (error, rows) => {
            if(error) {
                console.log('query error');
            } else {
                res.json({text: 'insersion correcta'});
            }
            console.log(data);
        });
    };

    async deleteList(req, res) { 
        const id = req.params.id;
        const query = `DELETE FROM formulario WHERE id = ${id}`;
        await dbConection.query(query, (error, rows) => {
            res.json({text: 'plant has been delete ' + id})
        });
    };


    //`UPDATE formulario set nombre = '${data.name}', nombre_cientifico = '${data.secondName}', region = '${data.region}', descripcion = '${data.description}', imagen = '${data.img}' WHERE id = ${id}`;
    //'UPDATE formulario set ' + `'${newPlant.name}','${newPlant.secondName}','${newPlant.region}','${newPlant.description}','${newPlant.img}'` + ' WHERE id = ' + id;
    async putList(req, res) {
        const id = req.params.id;
        const data = req.body;
        const query = `UPDATE formulario set nombre = '${data.name}', nombre_cientifico = '${data.secondName}', region = '${data.region}', descripcion = '${data.description}', imagen = '${data.img}' WHERE id = ${id}`;
        await dbConection.query(query, (error, rows) => {
            if(error) {
                console.log('query error');
            } else {
                res.json({text: 'the plant has been update ' + id});
                console.log(rows);
            }
        });
    };

}    
module.exports = formDAO;
