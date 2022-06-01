'use strict';

var dbConnection = require("../../config/db.config");

//Create object/schema(?) user
var User = function(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.password = user.password;
};

User.create = function(newUser, result) {
    // query for register user
    const createQuery = "INSERT INTO users SET ?"
    
    // Do the query
    dbConnection.query(createQuery, newUser, function (err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, show the insertId
        // console.log(res.insertId);
        result(null, res);
    });
};

// Get user by email
User.check = function(user, result) {
    // query for get
    const getQuery = "SELECT * FROM users WHERE email = ? "

    // get user email
    const email = user.email
    // console.log(email);

    // Do the query
    dbConnection.query(getQuery, email, function (err, res) {
        // If there are no user with this email address
        // console.log(res);
        if (!res) {
            result(null, res);
        }
    });
};

module.exports = User;