'use strict';

const User = require("../models/user.model");

// Handle get all users
exports.getAll = function(req, res) {
    User.getAll(function(err, users) {
        console.log("controller");

        if(err) {
            res.send(err);
        }

        console.log("res", users);
        res.send(users)
    });
};

// Handle create user
exports.create = function(req, res) {
    // News user data
    const newUser = new User(req.body);

    // Handle null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };
    // If everything is okay
    User.create(newUser, function(err, user) {
        if(err) {
            res.send(err);
        }

        res.json({
            error: false,
            message: "✅User added into our database",
            data: user
        });
    });
};

// Handle get user by id
exports.getById = function(req, res) {
    User.getById(req.params.id, function(err, user) {
        if(err) {
            res.send(err);
        }

        res.json(user);
    });
};

// Handle update user
exports.update = function(req, res) {
    // Handle null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };
    User.update(req.params.id, new User(req.body), function(err, user) {
        if (err) {
            res.send(err);
        }

        res.json({
            error: false,
            message: "👍User is updated!"
        });
    });
};

exports.delete = function(req, res) {
    User.delete(req.params.id, function(err, res) {
        if (err) {
            res.send(err);
        }

        res.json({
            error: false,
            message: "❎User is deleted!"
        });
    });
};