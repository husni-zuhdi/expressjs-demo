const express = require("express")
const router = express.Router()

const userController = require("../controllers/user.controller");

// Get all employees
router.post("/register", userController.register);

// Create new employee
router.post("/login", userController.login);

module.exports = router