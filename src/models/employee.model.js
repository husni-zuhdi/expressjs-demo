'use strict';

var dbConnection = require('../../config/db.config');
var request = require('request');
const { json } = require('express/lib/response');

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
    this.created_at = new Date();
    this.updated_at = new Date();
};

// Under development
// function doRequest(url, instance) {
//     return new Promise(function (resolve, reject) {
//         request({
//             url: url, //URL to hit
//             method: 'POST', // specify the request type
//             json: instance //Set the body as a json
//         }, function (error, res, body) {
//         if (!error && res.statusCode == 200) {
//             resolve(body.left);
//         } else {
//             reject(error);
//         }
//     });
// });
// }

// Create Employee
Employee.create =  async (newEmployee, result) => {
    // query for create
    const createQuery = "INSERT INTO employees SET ?"

    const instance = {
        "satisfaction_level": newEmployee.satisfaction_level,
        "last_evaluation": newEmployee.last_evaluation,
        "number_project": newEmployee.number_project,
        "average_montly_hours": newEmployee.average_montly_hours,
        "time_spend_company": newEmployee.time_spend_company,
        "work_accident": newEmployee.work_accident,
        "promotion_last_5years": newEmployee.promotion_last_5years,
        "department": newEmployee.department,
        "salary_level": newEmployee.salary_level,
    };
    console.log("url", process.env.ML_API_ENDPOINT)
    console.log("instance", instance)
    console.log("new", newEmployee)

    // Under development
    //Lets configure and request
    // async function predict() {
    //     var url = String(process.env.ML_API_ENDPOINT)
    //     let res = await doRequest(url, instance);
    //     console.log(res);
    // };
    // const pred = predict();
    // console.log("pred", pred)

    request({
        url: String(process.env.ML_API_ENDPOINT), //URL to hit
        method: 'POST', // specify the request type
        // headers: { // speciyfy the headers
        //     'Content-Type': 'application/json',
        // },
        json: instance //Set the body as a string
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
            var predict = Number(body.left);
            newEmployee.left = predict;
        };
    });
    
    // console.log("before", newEmployee);
    // Wait for the prediction is complete
    await new Promise(r => setTimeout(r, 15000));
    // console.log("after", newEmployee);

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
Employee.update = async (id, employee, result) => {
    // query for update
    const updateQuery = "UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, department=?, designation=?, satisfaction_level=?,last_evaluation=?, number_project=?, average_montly_hours=?, time_spend_company=?, work_accident=?, `left`=?, promotion_last_5years=?, salary_level=? WHERE id = ?"

    const instance = {
        "satisfaction_level": employee.satisfaction_level,
        "last_evaluation": employee.last_evaluation,
        "number_project": employee.number_project,
        "average_montly_hours": employee.average_montly_hours,
        "time_spend_company": employee.time_spend_company,
        "work_accident": employee.work_accident,
        "promotion_last_5years": employee.promotion_last_5years,
        "department": employee.department,
        "salary_level": employee.salary_level,
    };
    console.log("url", process.env.ML_API_ENDPOINT)
    console.log("instance", instance)

    request({
        url: String(process.env.ML_API_ENDPOINT), //URL to hit
        method: 'POST', // specify the request type
        // headers: { // speciyfy the headers
        //     'Content-Type': 'application/json',
        // },
        json: instance //Set the body as a string
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
            var predict = Number(body.left);
            employee.left = predict;
        };
    });
    
    // console.log("before", newEmployee);
    // Wait for the prediction is complete
    await new Promise(r => setTimeout(r, 15000));
    // console.log("after", newEmployee);

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
        id
        // String(employee.first_name),
        // String(employee.last_name),
        // String(employee.email),
        // String(employee.phone),
        // String(employee.department),
        // String(employee.designation),
        // String(employee.satisfaction_level),
        // String(employee.last_evaluation),
        // String(employee.number_project),
        // String(employee.average_montly_hours),
        // String(employee.time_spend_company),
        // String(employee.work_accident),
        // String(employee.left),
        // String(employee.promotion_last_5years),
        // String(employee.salary_level),
        // String(id)
    ]
    console.log("emp", employeeData);

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