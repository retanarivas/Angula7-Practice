const express = require("express");
const path = require("path");
const morgan = require('morgan');
const mysql = require('mysql');
const cors = require('cors');
const myConnection = require('express-myconnection');
const formidable = require('express-formidable');
const dbConnection = require("./server/config/dbConection");
const app = express();

//importing routes
const formRoute = require("./server/routes/formRoute");

//settings
const port = process.env.PORT || 3000;


//midleware
app.use(morgan('dev'));
app.use(cors());
app.use(myConnection(mysql, dbConnection));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
/* app.use(formidable({ 
    encoding: 'utf-8',
    multiples: true, 
    keepExtensions: true,
    uploadDir: '/src/images'
})); */

//routes
app.use("/", formRoute);
app.use('/form', formRoute);
app.use('/list', formRoute);
app.use('/description', formRoute);

//static files
app.use(express.static(__dirname + "/dist/practice"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/practice/index.html"));
});

// database status 
console.log(`==================
data base config:
host: ${dbConnection.config.host},
port: ${dbConnection.config.port},
user: ${dbConnection.config.user},
database: ${dbConnection.config.database}
==================`);

//starting the server
app.listen(port, () => {
    console.log("server on port 3000");
});
