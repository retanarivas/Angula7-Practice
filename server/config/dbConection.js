const mysql = require('mysql');


const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'plants'
    });
/* connection.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log('conected');
    }
}); */
 module.exports = connection;
