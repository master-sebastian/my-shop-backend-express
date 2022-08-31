const express = require('express')

const router = express.Router()

const UsersService = require("./../services/UsersService")

router.post("/", UsersService.create )

router.get("/", UsersService.get )

router.get("/:id", UsersService.getById )

router.delete("/:id", UsersService.delete )

router.patch("/reset_password", UsersService.resetPassword)

module.exports = router