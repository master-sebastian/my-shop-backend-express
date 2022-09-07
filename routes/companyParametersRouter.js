const express = require('express')

const router = express.Router()

const CompanyParametersService = require("../services/CompanyParametersService")

router.post("/", CompanyParametersService.create )

router.get("/", CompanyParametersService.get )

router.get("/:id", CompanyParametersService.getById )

router.delete("/:id", CompanyParametersService.delete )

module.exports = router