'use strict';

const Employee = require("../models/employee.model");

// Handle get all employees
exports.getAll = function(req, res) {
    Employee.getAll(function(err, employees) {
        console.log("controller");

        if(err) {
            res.send(err);
        }

        console.log("res", employees);
        res.send(employees)
    });
};

// Handle create employee
exports.create = function(req, res) {
    // News employee data
    const newEmployee = new Employee(req.body);

    // Handle null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: "⛔Please provide all required data!"
        });
    };
    // If everything is okay
    Employee.create(newEmployee, function(err, employee) {
        if(err) {
            res.send(err);
        }

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
            res.send(err);
        }

        res.json(employee);
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
    Employee.delete(req.params.id, function(err, res) {
        if (err) {
            res.send(err);
        }

        res.json({
            error: false,
            message: "❎Employee is deleted!"
        });
    });
};