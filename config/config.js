const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ernesto1234',
    database: '2bite'
});

db.connect(function(err) {
    if (err) throw err;
    console.log('DATABSE CONNECTED!');

});

module.exports= db;