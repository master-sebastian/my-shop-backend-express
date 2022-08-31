const express = require('express')
const router = express.Router()
const CategoriesService = require('./../services/CategoriesService')

router.post("/", CategoriesService.create)

router.get("/", CategoriesService.get )

module.exports = router