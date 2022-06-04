'use strict';
const mysql = require('mysql2');

// database configuration
const config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: 'expressjs_demo_db'
}

// local db connection
const dbConnection = mysql.createConnection(config);

dbConnection.connect(function(err) {
    if (err) throw err;

    console.log("Database Connected")
});

module.exports = dbConnection;