'use strict';

const { createQuery } = require('mysql/lib/Connection');
var dbConnection = require('./../../config/db.config');

//Create object user
var User = function(user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.phone = user.phone;
    this.organization = user.organization;
    this.designation = user.designation;
    this.salary = user.salary;
    this.status = user.status;
    this.created_at = new Date();
    this.updated_at = new Date();
};

// Create User
User.create = function(newUser, result) {
    // query for create
    createQuery = "INSERT INTO users SET ?"
    
    // Do the query
    dbConnection.query(createQuery, newUser, function(err, res) {
        // If error, show it
        if(err) {
            console.log("error", err);
            result(err, null);
        }
        
        // If not, show the insertId
        console.log(res.insertId);
        result(null, res.insertId);
    });
};

// Get User by Id
User.getById = function(id, result) {
    // query for get
    getQuery = "SELECT * FROM users WHERE id = ? "

    // Do the query
    dbConnection.query(getQuery, id, function(err, res) {
        // If error, show it
        if(err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, serve the user data
        result(null, res);
    });
};

// Get All User
User.getAll = function(result) {
    // query for get all
    getAllQuery = "SELECT * FROM users"

    // Do the query
    dbConnection.query(getAllQuery, function(err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, serve the user data
        console.log("users", res)
        result(null, res);
    });
};

// Update User
User.update = function(id, user, result) {
    // query for update
    updateQuery = `
    UPDATE users SET
        first_name=?,
        last_name=?,
        email=?,
        phone=?,
        organization=?,
        designation=?,
        salary=?
    WHERE id = ?
    `

    // User data to be updated
    userData = [
        user.first_name,
        user.last_name,
        user.email,
        user.phone,
        user.organization,
        user.designation,
        user.salary,
        id
    ]

    // Do the query
    dbConnection.query(updateQuery, userData, function (err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, update user data
        result(null, res);
    });
};

// Delete User
User.delete = function(id, result) {
    // query for delete
    deleteQuery = "DELETE FROM users WHERE id = ?"

    // Do the query
    dbConnection.query(deleteQuery, id, function (err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, show deleted user
        result(null, res);
    });
};

module.exports = User;