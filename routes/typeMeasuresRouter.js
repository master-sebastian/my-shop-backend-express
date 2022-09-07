const express = require('express')
const router = express.Router()
const TypeMeasuresService = require('./../services/TypeMeasuresService')

router.post("/", TypeMeasuresService.create)

router.get("/", TypeMeasuresService.get)

router.get("/:id", TypeMeasuresService.getById )

router.delete("/:id", TypeMeasuresService.delete )

module.exports = router