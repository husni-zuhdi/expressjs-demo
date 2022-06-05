'use strict';

const Employee = require("../models/employee.model");

// Handle get all employees
exports.getAll = function(req, res) {
    Employee.getAll(function(err, employees) {
        if(err) {
            res.status(404).json({
                error: true,
                log: err
            });
        }

        res.status(200).json({
            error: false,
            message: "👨‍💼👩‍💼 Here are your employees data",
            data: employees
        });
    });
};

// Handle create employee
exports.create = function(req, res) {
    // News employee data
    const newEmployee = new Employee(req.body);

    // Handle null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).json({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };
    // If everything is okay
    Employee.create(newEmployee, function(err, employee) {
        if(err) {
            res.send(err);
        };

        res.json({
            error: false,
            message: "✅Employee added into our database",
            data: employee
        });
    });
};

// Handle get employee by id
exports.getById = function(req, res) {
    Employee.getById(req.params.id, function(err, employee) {
        if(err) {
            res.status(404).json({
                error: true,
                log: err
            });
        }

        res.status(200).json({
            error: false,
            message: "👨‍💼👩‍💼 Here are your employees data",
            data: employee
        });
    });
};

// Handle update employee
exports.update = function(req, res) {
    // Handle null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };
    Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
        if (err) {
            res.send(err);
        }

        res.json({
            error: false,
            message: "👍Employee is updated!"
        });
    });
};

exports.delete = function(req, res) {
    Employee.delete(req.params.id, function(err, employee) {
        if (err) {
            res.send(err);
        }

        res.json({
            error: false,
            message: "❎Employee is deleted!"
        });
    });
};