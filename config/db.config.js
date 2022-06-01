'use strict';

const mysql = require('mysql');

// database configuration
const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'expressjs_demo_db'
}

// local db connection
const dbConnection = mysql.createConnection(config);

dbConnection.connect(function(err) {
    if (err) throw err;

    console.log("Database Connected")
});

module.exports = dbConnection;