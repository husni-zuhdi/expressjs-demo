'use strict';

var dbConnection = require('../../config/db.config');

//Create object/schema(?) employee
var Employee = function(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.department = employee.department;
    this.designation = employee.designation;
    this.satisfaction_level = employee.satisfaction_level;
    this.last_evaluation = employee.last_evaluation;
    this.number_project = employee.number_project;
    this.average_montly_hours = employee.average_montly_hours;
    this.time_spend_company = employee.time_spend_company;
    this.work_accident = employee.work_accident;
    this.left = employee.left;
    this.promotion_last_5years = employee.promotion_last_5years;
    this.salary_level = employee.salary_level;
    this.will_resign = employee.will_resign;
    this.created_at = new Date();
    this.updated_at = new Date();
};

// Create Employee
Employee.create = function(newEmployee, result) {
    // query for create
    const createQuery = "INSERT INTO employees SET ?"
    
    // Do the query
    dbConnection.query(createQuery, newEmployee, function(err, res) {
        // If error, show it
        if(err) {
            console.log("error", err);
            result(err, null);
        }
        
        // If not, show the insertId
        console.log("id", res.insertId);
        result(null, res.insertId);
    });
};

// Get Employee by Id
Employee.getById = function(id, result) {
    // query for get
    const getQuery = "SELECT * FROM employees WHERE id = ? "

    // Do the query
    dbConnection.query(getQuery, id, function(err, res) {
        // If error, show it
        if(err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, serve the employee data
        console.log("employee", res);
        result(null, res);
    });
};

// Get All Employee
Employee.getAll = function(result) {
    // query for get all
    const getAllQuery = "SELECT * FROM employees"

    // Do the query
    dbConnection.query(getAllQuery, function(err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, serve the employee data
        console.log("employees", res);
        result(null, res);
    });
};

// Update Employee
Employee.update = function(id, employee, result) {
    // query for update
    const updateQuery = `
    UPDATE employees SET
        first_name=?,
        last_name=?,
        email=?,
        phone=?,
        department=?,
        designation=?,
        satisfaction_level=?,
        last_evaluation=?,
        number_project=?,
        average_montly_hours=?,
        time_spend_company=?,
        work_accident=?,
        left=?,
        promotion_last_5years=?,
        salary_level=?,
        will_resign=?,
    WHERE id = ?
    `

    // Employee data to be updated
    const employeeData = [
        employee.first_name,
        employee.last_name,
        employee.email,
        employee.phone,
        employee.department,
        employee.designation,
        employee.satisfaction_level,
        employee.last_evaluation,
        employee.number_project,
        employee.average_montly_hours,
        employee.time_spend_company,
        employee.work_accident,
        employee.left,
        employee.promotion_last_5years,
        employee.salary_level,
        employee.will_resign,
        id
    ]

    // Do the query
    dbConnection.query(updateQuery, employeeData, function (err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, update employee data
        console.log("employee", res);
        result(null, res);
    });
};

// Delete Employee
Employee.delete = function(id, result) {
    // query for delete
    const deleteQuery = "DELETE FROM employees WHERE id = ?"

    // Do the query
    dbConnection.query(deleteQuery, id, function (err, res) {
        // If error, show it
        if (err) {
            console.log("error", err);
            result(err, null);
        }

        // If not, show deleted employee
        result(null, res);
    });
};

module.exports = Employee;