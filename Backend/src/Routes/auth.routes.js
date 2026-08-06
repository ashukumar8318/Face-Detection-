const express = require("express")
const authRoutes = express.Router()
const authController = require("../controller/auth.controller")
const {identifyUser} = require("../middleware/auth.middleware")

authRoutes.use(express.json())


authRoutes.post("/register",authController.registerController)

authRoutes.post("/login",authController.loginController)

authRoutes.get("/get-me",identifyUser,authController.getMeController)

authRoutes.get("/logout",authController.logoutController)

module.exports = authRoutes


