const express = require("express")
const router = express.Router()
const auth = require('../controllers/auth') 

const employeeController = require("../controllers/employee.controller");

// Get all employees
router.get("/", auth, employeeController.getAll);

// Create new employee
router.post("/", auth, employeeController.create);

// Get employee by Id
router.get("/:id", auth, employeeController.getById);

// Update employee data
router.put("/:id", auth, employeeController.update);

// Delete employee data
router.delete("/:id", auth, employeeController.delete);

module.exports = router