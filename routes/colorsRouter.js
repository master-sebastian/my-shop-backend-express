const express = require('express')
const router = express.Router()
const ColorsService = require('./../services/ColorsService')

router.post("/", ColorsService.create )

router.get("/", ColorsService.get )

router.get("/:id", ColorsService.getById )

router.put("/:id", ColorsService.editById )

router.delete("/:id", ColorsService.delete )

module.exports = router