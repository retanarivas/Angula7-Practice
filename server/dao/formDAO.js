const dbConection = require('../config/dbConection');
const fs = require('fs');
const uuidv1 = require('uuid/v1');


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
        var dir = 'src/assets/img';
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        } 
        var id = uuidv1();
        var base64Image = req.body.img;
        var pathServer = `assets/img/${id}.png`;
        fs.writeFile(`src/assets/img/${id}.png`, base64Image, {encoding: 'base64'}, (error, result) => {
            if(error) {
                console.log(error);
            } 
            console.log('imagen guardada'); 
        });
        var data = req.body;
        var query = `INSERT INTO formulario VALUES (null,'${data.name}','${data.secondName}','${data.region}','${data.description}','${pathServer}')`;
        await dbConection.query(query, (error, rows) => {
            if(error) {
                console.log('query error');
            } else {
                res.json({text: 'insersion correcta'});
            }
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
        var imgId = uuidv1();
        var base64Image = req.body.img;
        var pathServer = `assets/img/${imgId}.png`;
        fs.writeFile(`src/assets/img/${imgId}.png`, base64Image, {encoding: 'base64'}, (error, result) => {
            if(error) {
                console.log(error);
            } 
            console.log('image save'); 
        }); 
        const id = req.params.id;
        const data = req.body;
        const query = `UPDATE formulario set nombre = '${data.name}', nombre_cientifico = '${data.secondName}', region = '${data.region}', descripcion = '${data.description}', imagen = '${pathServer}' WHERE id = ${id}`;
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
