'use strict';

const mysql = require('mysql2');

// database configuration
const config = {
    host: '0.0.0.0',
    user: 'root',
    password: 'passw0rd',
    database: 'expressjs_demo_db'
}

// local db connection
const dbConnection = mysql.createConnection(config);

dbConnection.connect(function(err) {
    if (err) throw err;

    console.log("Database Connected")
});

module.exports = dbConnection;