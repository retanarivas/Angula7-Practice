const express = require('express');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
;


const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'plants'
    });

 module.exports = connection;
