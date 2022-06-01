const express = require("express")
const router = express.Router()

const employeeController = require("../controllers/employee.controller");

// Get all employees
router.get("/", employeeController.getAll);

// Create new employee
router.post("/", employeeController.create);

// Get employee by Id
router.get("/:id", employeeController.getById);

// Update employee data
router.put(":/id", employeeController.update);

// Delete employee data
router.delete("/:id", employeeController.delete);

module.exports = router