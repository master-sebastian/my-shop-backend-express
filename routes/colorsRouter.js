const express = require('express')
const router = express.Router()
const ColorsService = require('./../services/ColorsService')

router.post("/", ColorsService.create )

router.get("/", ColorsService.get )

module.exports = router