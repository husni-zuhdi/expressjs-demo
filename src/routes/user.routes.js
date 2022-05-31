const express = require("express")
const router = express.Router()

const userController = require("../controllers/user.controller");

// Get all users
router.get("/", userController.getAll);

// Create new user
router.post("/", userController.create);

// Get user by Id
router.get("/:id", userController.getById);

// Update user data
router.put(":/id", userController.update);

// Delete user data
router.delete("/:id", userController.delete);

module.exports = router