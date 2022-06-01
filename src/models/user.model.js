'use strict';

const { createQuery } = require("mysql/lib/Connection");
var dbConnection = require("../../config/db.config");

//Create object/schema(?) user
var User = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = user.password;
    this.token = user.token;
};

User.register = function(newUser, result) {
    // query for register user
    registerQuery = "INSERT INTO users SET ?"
    
    // Do the query
    dbConnection.query(createQuery, newUser, function (err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, show the insertId
        console.log(res.insertId);
        result(null, res.insertId);
    });
}

User.login = function(User, result) {
    // Code Here
}

// Get user by email
User.check = function (email, result) {
    // query for get
    getQuery = "SELECT * FROM user WHERE email = ? "

    // Do the query
    dbConnection.query(getQuery, email, function (err, res) {
        // If not error, there must be a user with this email
        // Let it pass
        if (!err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, serve the employee data
        result(null, true);
    });
};

module.exports = User;