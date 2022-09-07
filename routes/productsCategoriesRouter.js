const express = require('express')
const router = express.Router()

const ProductsCategoriesServices = require('./../services/ProductsCategoriesServices')

router.post("/", ProductsCategoriesServices.create)

router.get("/", ProductsCategoriesServices.get)

router.get("/:id", ProductsCategoriesServices.getById )

router.delete("/:id", ProductsCategoriesServices.delete )

module.exports = router
