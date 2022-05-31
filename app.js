const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
    res.send("Hello all 👋. This is demo for CC-25");
});

// Import employeeRoutes and using it as middleware
const employeeRoutes = require("./src/routes/employee.routes");
app.use("/api/v1/employees", employeeRoutes)

module.exports = app;