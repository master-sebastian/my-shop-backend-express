const express = require('express')
const router = express.Router()

const MeasuresCategoriesServices = require('./../services/MeasuresCategoriesServices')

router.post("/", MeasuresCategoriesServices.create)

router.get("/", MeasuresCategoriesServices.get)

router.get("/:id", MeasuresCategoriesServices.getById )

router.put("/:id", MeasuresCategoriesServices.editById )

router.delete("/:id", MeasuresCategoriesServices.delete )

module.exports = router