const express = require('express')
const router = express.Router()
const CategoriesService = require('./../services/CategoriesService')

router.post("/", CategoriesService.create)

router.get("/", CategoriesService.get )

router.get("/:id", CategoriesService.getById )

router.delete("/:id", CategoriesService.delete )

module.exports = router