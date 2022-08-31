const express = require('express')
const router = express.Router()
const TypeMeasuresService = require('./../services/TypeMeasuresService')

router.post("/", TypeMeasuresService.create)

router.get("/", TypeMeasuresService.get)

module.exports = router