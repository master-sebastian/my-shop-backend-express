const express = require('express')
const router = express.Router()
const AuthService = require('./../services/AuthService')
const verifyToken = require("../middleware/verifyToken")
router.post("/login", AuthService.login)
router.post("/validToken", verifyToken, AuthService.validToken)

module.exports = router