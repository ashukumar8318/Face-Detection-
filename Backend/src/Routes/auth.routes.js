const express = require("express")
const authRoutes = express.Router()
const authController = require("../controller/auth.controller")

authRoutes.use(express.json())


authRoutes.post("/register",authController.registerController)

authRoutes.post("/login",authController.loginController)

module.exports = authRoutes


